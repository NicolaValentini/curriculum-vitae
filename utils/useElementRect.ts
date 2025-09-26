import { useCallback, useEffect, useRef, useState } from 'react';
import throttle from 'lodash/throttle';

const isSameRect = (a: DOMRect | null, b: DOMRect | null) => {
  if (!a || !b) return a === b;
  return (
    a.x === b.x &&
    a.y === b.y &&
    a.width === b.width &&
    a.height === b.height &&
    a.top === b.top &&
    a.left === b.left
  );
};

export function useElementRect<T extends HTMLElement | SVGElement>() {
  const nodeRef = useRef<T | null>(null);
  const frame = useRef<number | null>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [key, setKey] = useState<string | null>(null);

  const updateRect = useCallback(() => {
    const newRect = nodeRef.current?.getBoundingClientRect() ?? null;

    setRect(prev => (isSameRect(prev, newRect) ? prev : newRect));
  }, []);

  const ref = useCallback(
    (el: T | null, _key: string | null = null) => {
      if (el !== nodeRef.current) {
        nodeRef.current = el;
        setKey(prev => (prev === _key ? prev : _key));

        updateRect();
      }
    },
    [updateRect],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedUpdate = useCallback(
    throttle(() => {
      if (frame.current) cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        updateRect();
        frame.current = null;
      });
    }, 500),
    [updateRect],
  );

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    updateRect();

    const resizeObserver = new ResizeObserver(debouncedUpdate);
    resizeObserver.observe(node);

    const mutationObserver = new MutationObserver(debouncedUpdate);
    mutationObserver.observe(node, { attributes: true });

    window.addEventListener('resize', debouncedUpdate, { passive: true });
    window.addEventListener('scroll', debouncedUpdate, { passive: true });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('resize', debouncedUpdate);
      window.removeEventListener('scroll', debouncedUpdate);
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = null;
    };
  }, [debouncedUpdate, updateRect]);

  return { ref, rect, updateRect, key };
}
