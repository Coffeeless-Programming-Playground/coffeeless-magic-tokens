import { useImperativeHandle, useRef } from 'react';

export interface GlowGenerationHandle {
  appendChunk: (chunk: string) => void;
}

interface ActiveChunk {
  span: HTMLSpanElement;
  start: number;
  text: string;
}

export const useGlowGeneration = (
  widgetRef: React.Ref<GlowGenerationHandle>,
) => {
  const textAnimationContainerRef = useRef<HTMLDivElement>(null);
  const pendingChunksRef = useRef<string[]>([]);
  const activeChunksRef = useRef<ActiveChunk[]>([]);
  const animatingRef = useRef<boolean>(false);

  const appendChunk = (chunk: string) => {
    if (!chunk) return;
    pendingChunksRef.current.push(chunk);
    if (!animatingRef.current) startLoop();
  };
  useImperativeHandle(widgetRef, () => ({ appendChunk }));

  const startLoop = () => {
    animatingRef.current = true;
    requestAnimationFrame(step);
  };

  const step = (now: number) => {
    if (pendingChunksRef.current.length) {
      const next = pendingChunksRef.current.shift()!;
      const span = document.createElement('span');
      span.textContent = next;
      span.classList.add('glowing-chunk')
      textAnimationContainerRef.current?.appendChild(span);
      activeChunksRef.current.push({ span, start: now, text: next });
    }

    const stillActive: ActiveChunk[] = [];
    activeChunksRef.current = stillActive;

    if (pendingChunksRef.current.length || activeChunksRef.current.length) {
      requestAnimationFrame(step);
    } else {
      animatingRef.current = false;
    }
  };

  return {
    textAnimationContainerRef
  }
}