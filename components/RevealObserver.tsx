"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Watches every [data-reveal] element and adds `is-in` once about 15% of it
 * is on screen. Each element animates once, then stops being observed.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

/**
 * Inline script run before the page paints: marks JS as available (so reveal
 * styles apply) and restores the saved theme. If the app never starts, the
 * `js` class is removed again so nothing stays hidden.
 */
export const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')d.setAttribute('data-theme',t)}catch(e){}setTimeout(function(){if(!d.classList.contains('reveal-ready'))d.classList.remove('js')},4000)})();`;
