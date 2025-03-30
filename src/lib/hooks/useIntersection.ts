"use client";

import { useEffect } from "react";

interface UseIntersectionProps {
  target: React.RefObject<Element>;
  onIntersect: () => void;
  disabled?: boolean;
  threshold?: number;
}

export function useIntersection({
  target,
  onIntersect,
  disabled,
  threshold = 0.5,
}: UseIntersectionProps) {
  useEffect(() => {
    if (disabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold: threshold }
    );

    const current = target.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, [target, onIntersect, disabled]);
}
