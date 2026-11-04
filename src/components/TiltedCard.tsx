import { useRef, useState } from 'react';

interface TiltedCardProps {
  imageSrc: React.ComponentProps<'img'>['src'];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties['height'];
  containerWidth?: React.CSSProperties['width'];
  imageHeight?: React.CSSProperties['height'];
  imageWidth?: React.CSSProperties['width'];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
  /** Mark as the page's largest contentful paint candidate */
  priority?: boolean;
}

/**
 * CSS/transform-based tilt card (no animation library needed):
 *  - image tilts toward the cursor with a spring-like ease
 *  - scales up on hover, caption chip follows the pointer
 */
export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  priority = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current || !innerRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    innerRef.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${scaleOnHover})`;

    if (captionRef.current) {
      captionRef.current.style.transform = `translate3d(${e.clientX - rect.left}px, ${e.clientY - rect.top}px, 0) rotate(${(-offsetY * 0.6).toFixed(2)}deg)`;
    }
  }

  function handleMouseLeave() {
    setHovered(false);
    if (innerRef.current) {
      innerRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    }
    if (captionRef.current) {
      captionRef.current.style.opacity = '0';
    }
  }

  function handleMouseEnter() {
    setHovered(true);
    if (captionRef.current) {
      captionRef.current.style.opacity = '1';
    }
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <div
        ref={innerRef}
        className="relative [transform-style:preserve-3d] transition-transform duration-300 ease-out will-change-transform"
        style={{ width: imageWidth, height: imageHeight }}
      >
        <img
          src={imageSrc}
          alt={altText}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? "high" : undefined}
          decoding="async"
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
          style={{ width: imageWidth, height: imageHeight }}
        />

        {displayOverlayContent && overlayContent && (
          <div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </div>
        )}
      </div>

      {showTooltip && (
        <figcaption
          ref={captionRef}
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block transition-opacity duration-200"
          style={{ opacity: hovered ? undefined : 0 }}
        >
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}
