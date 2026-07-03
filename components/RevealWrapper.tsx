"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  /** Visibility threshold (0-1), default 0.15 (same as original) */
  threshold?: number;
  /** Optional className added to the wrapper */
  className?: string;
}

/**
 * Wraps children in a .reveal div that animates on scroll,
 * exactly matching the original IntersectionObserver behavior.
 */
export default function RevealWrapper({
  children,
  threshold = 0.15,
  className = "",
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`reveal${active ? " active" : ""} ${className}`}>
      {children}
    </div>
  );
}