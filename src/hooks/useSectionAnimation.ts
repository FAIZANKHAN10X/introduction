import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type AnimateFn<T extends HTMLElement> = (root: T) => void;

export function useSectionAnimation<T extends HTMLElement>(
  animate: AnimateFn<T>,
  deps: unknown[] = [],
) {
  const ref = useRef<T | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;

    const ctx = gsap.context(() => animate(el), el);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion, ...deps]);

  return ref;
}
