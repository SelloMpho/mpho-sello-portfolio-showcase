import { useEffect, useRef, useState, type ComponentType, type LazyExoticComponent } from 'react';
import { Suspense } from 'react';

interface DeferredSectionProps {
  id: string;
  Component: LazyExoticComponent<ComponentType>;
  minHeightClass: string;
}

const DeferredSection = ({ id, Component, minHeightClass }: DeferredSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activateFromHash = () => {
      if (decodeURIComponent(window.location.hash.slice(1)) === id) setActive(true);
    };
    const activateRequestedSection = (event: Event) => {
      const requestedId = (event as CustomEvent<{ id?: string }>).detail?.id;
      if (requestedId === id) setActive(true);
    };

    activateFromHash();
    window.addEventListener('hashchange', activateFromHash);
    window.addEventListener('portfolio:activate-section', activateRequestedSection);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: '700px 0px' },
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', activateFromHash);
      window.removeEventListener('portfolio:activate-section', activateRequestedSection);
    };
  }, [id]);

  return (
    <div id={id} ref={containerRef} className={minHeightClass} aria-busy={!active}>
      {active && (
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      )}
    </div>
  );
};

export default DeferredSection;