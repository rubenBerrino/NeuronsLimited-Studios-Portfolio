"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  // Don't show legal links on policy pages
  const showLegalLinks = pathname === "/";

  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} NeuronsLimited Studios. All Rights
        Reserved
      </p>
      {showLegalLinks && (
        <div className="legal-links">
          <Link href="/policy">Privacy &amp; Cookie Policy</Link>
          <span className="separator">|</span>
          <Link href="/policy">Terms of Service</Link>
        </div>
      )}
    </footer>
  );
}