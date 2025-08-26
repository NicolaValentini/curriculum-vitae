import { useCallback, useEffect, useState } from 'react';

export function useElementRect<T extends HTMLElement>() {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [node, setNode] = useState<T | null>(null);
  const [key, setKey] = useState<string | null>(null);

  const ref = useCallback((el: T | null, _key?: string) => {
    setNode(el);
    setKey(_key?.trim()?.length ? _key : null);
  }, []);

  const updateRect = useCallback(
    () => setRect(node?.getBoundingClientRect() ?? null),
    [node],
  );

  useEffect(() => {
    if (!node) {
      setRect(null);
      return;
    }

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

  return { ref, rect, updateRect, key };
}
