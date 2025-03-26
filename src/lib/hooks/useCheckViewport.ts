"use client";

import useWindowSize from "@/lib/hooks/useGetViewport";
import BREAKPOINTS from "../constants/breakpoints";

export function useIsMobile() {
  const { width } = useWindowSize();
  return width > 0 && width < BREAKPOINTS.TABLET;
}

export function useIsTablet() {
  const { width } = useWindowSize();
  return width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.PC;
}

export function useIsPC() {
  const { width } = useWindowSize();
  return width >= BREAKPOINTS.PC;
}
