"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const caseStudies = [
  {
    id: "content-browser",
    title: "Generic Content Browser for Autodesk M&E Products",
    slug: "/case-study/content-browser",
    cta: "Got a few minutes? Watch above, or",
  },
  {
    id: "cloud-storage",
    title: "Cloud Personal Storage for Autodesk Maya and 3dsMax",
    slug: "/case-study/cloud-storage",
    cta: "Prefer reading? Skip the video and",
    video: "/videos/cloud-storage.mp4",
  },
  {
    id: "asset-versioning",
    title: "Asset Versioning for Unity Asset Manager",
    slug: "/case-study/asset-versioning",
    cta: "Curious how it all came together?",
    video: "/videos/asset-versioning.mp4",
  },
  {
    id: "3d-annotation",
    title: "3D Annotation for Unity Reflect",
    slug: "/case-study/3d-annotation",
    cta: "Want the full picture? ☕ Watch above, or",
  },
];

export default function CaseStudies() {
  const [activeId, setActiveId] = useState(caseStudies[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    caseStudies.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="magazine" ref={containerRef}>
      {/* Sidebar */}
      <nav className="magazine-sidebar">
        <ul>
          {caseStudies.map(({ id, title }, i) => (
            <li key={id} className={activeId === id ? "active" : ""}>
              <button onClick={() => scrollTo(id)}>
                <span className="sidebar-number">{String(i + 1).padStart(2, "0")}</span>
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <div className="magazine-content">
        {caseStudies.map(({ id, title, slug, cta, video }, i) => (
          <div key={id} id={id} className="magazine-item">
            <h3 className="magazine-item-number">
              {String(i + 1).padStart(2, "0")}
            </h3>
            <h3 className="magazine-item-title">{title}</h3>
            {video ? (
              <div className="magazine-video">
                <video
                  src={video}
                  controls
                  playsInline
                  muted
                  preload="metadata"
                  style={{ width: "100%", borderRadius: "0.5rem" }}
                />
              </div>
            ) : (
              <div className="magazine-video">
                <span>Video coming soon</span>
              </div>
            )}
            <p className="magazine-link">
              {cta}{" "}
              <Link href={slug}>read the full story here &rarr;</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
