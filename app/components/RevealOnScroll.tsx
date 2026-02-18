"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll(".about, .work, .case-body section")
      .forEach((el) => {
        el.classList.add("reveal");
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return null;
}
