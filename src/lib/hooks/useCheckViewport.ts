import useWindowSize from "@/lib/hooks/useGetViewport";

export const BREAKPOINTS = {
  PC: 1200,
  TABLET: 768,
  MOBILE: 375,
} as const;

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
