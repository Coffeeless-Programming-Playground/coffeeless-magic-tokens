import { RefObject, useEffect, useState } from 'react';

interface ContentExpansionResult {
  expanded: boolean;
  overflowing: boolean;
  maxHeight: number | 'auto';
  toggleExpansion(): void
}

export function useContentExpansion(
  contentRef: RefObject<HTMLDivElement>,
  collapsedHeight: number
): ContentExpansionResult {
  const [expanded, setExpanded] = useState(false)
  const [overflowing, setOverflowing] = useState(false)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const measure = () => {
      if (!expanded) {
        const currentOverflow = el.scrollHeight > collapsedHeight
        setOverflowing(currentOverflow)
        if (currentOverflow) {
          el.classList.add('magic-tokens-widget-text-overflow')
        } else {
          el.classList.remove('magic-tokens-widget-text-overflow')
        }
      }
    }
    measure()
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(el)
    return () => resizeObserver.disconnect()
  }, [contentRef, collapsedHeight])

  const maxHeight: number | 'auto' = expanded ? contentRef.current?.scrollHeight ?? 'auto' : collapsedHeight
  const toggleExpansion = () => setExpanded(v => !v)
  return {
    expanded,
    overflowing,
    maxHeight,
    toggleExpansion
  }
}