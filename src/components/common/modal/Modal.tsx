"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/50">
      {children}
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
