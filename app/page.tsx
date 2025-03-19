"use client";

import useWindowSize from "@/hooks/useWindowSize";

export default function Home() {
  const { width } = useWindowSize();

  return <div>{width}</div>;
}
