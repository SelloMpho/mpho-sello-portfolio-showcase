import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Fixed full-viewport WebGL backdrop.
 *  - Animated gradient mesh shader (cyan -> magenta -> gold)
 *  - Reacts to mouse position and scroll progress
 *  - Cinematic 60fps; honors prefers-reduced-motion
 */
const FRAG = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec2  uMouse;
uniform float uScroll;
uniform vec3  uColorA;
uniform vec3  uColorB;
uniform vec3  uColorC;
varying vec2 vUv;

// Cheap simplex-ish noise
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;
  i=mod289(i);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m;m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;
  vec3 ox=floor(x+0.5);vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}

void main(){
  vec2 uv = vUv;
  vec2 m = uMouse * 0.5;
  float t = uTime * 0.08;
  float s = uScroll * 1.2;

  float n1 = snoise(uv * 2.2 + vec2(t, -t*0.6) + m);
  float n2 = snoise(uv * 3.7 - vec2(t*0.8, t) + m*0.5 + s);
  float n  = (n1 * 0.65 + n2 * 0.35);

  // Distance-based glow lobes
  float d1 = 1.0 - smoothstep(0.0, 0.7, distance(uv, vec2(0.25 + m.x*0.2, 0.35 - s*0.1)));
  float d2 = 1.0 - smoothstep(0.0, 0.8, distance(uv, vec2(0.78 - m.x*0.15, 0.7 + s*0.05)));

  vec3 col = mix(uColorA, uColorB, smoothstep(-0.6, 0.8, n));
  col = mix(col, uColorC, d1 * 0.55);
  col = mix(col, uColorB * 1.2, d2 * 0.45);

  // vignette
  float vig = smoothstep(1.1, 0.2, length(uv - 0.5));
  col *= 0.35 + vig * 0.75;

  // soft film grain
  float grain = fract(sin(dot(uv * 1000.0, vec2(12.9898,78.233))) * 43758.5453);
  col += (grain - 0.5) * 0.025;

  gl_FragColor = vec4(col, 1.0);
}
`;

const VERT = /* glsl */ `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const ShaderPlane = () => {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();
  const mouse = useRef(new THREE.Vector2(0, 0));
  const scroll = useRef(0);

  useMemo(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / size.width - 0.5;
      mouse.current.y = -(e.clientY / size.height - 0.5);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [size.width, size.height]);

  useFrame((state) => {
    if (!mat.current) return;
    const u = mat.current.uniforms;
    u.uTime.value = state.clock.elapsedTime;
    // ease
    u.uMouse.value.lerp(mouse.current, 0.05);
    u.uScroll.value += (scroll.current - u.uScroll.value) * 0.05;
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
      uColorA: { value: new THREE.Color('#04060d') },
      uColorB: { value: new THREE.Color('#0e2a6b') },
      uColorC: { value: new THREE.Color('#c9a14a') },
    }),
    [],
  );

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        fragmentShader={FRAG}
        vertexShader={VERT}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
};

const WebGLBackdrop = () => {
  // Respect reduced motion: skip WebGL render loop
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-70 mix-blend-screen dark:mix-blend-screen">
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        orthographic
        camera={{ position: [0, 0, 1] }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
};

export default WebGLBackdrop;
