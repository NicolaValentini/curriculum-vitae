import { useCallback, useEffect, useState } from 'react';

export function useElementRect<T extends HTMLElement>() {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [node, setNode] = useState<T | null>(null);

  const ref = useCallback((el: T | null) => {
    setNode(el);
  }, []);

  const update = useCallback(
    () => setRect(node?.getBoundingClientRect() ?? null),
    [node],
  );

  useEffect(() => {
    if (!node) return;

    const updateRect = () => setRect(node.getBoundingClientRect());

    updateRect();

    const resizeObserver = new ResizeObserver(updateRect);
    resizeObserver.observe(node);

    const mutationObserver = new MutationObserver(updateRect);
    mutationObserver.observe(node, { attributes: true });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [node]);

  return { ref, rect, update };
}
