"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function FloatingIcons() {
  useEffect(() => {
    const icons = document.querySelectorAll<HTMLElement>(".floating-icon");
    const hero = document.querySelector<HTMLElement>(".hero");

    if (!hero || icons.length === 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      icons.forEach((icon, i) => {
        const speed = 15 + i * 5;
        const offsetX = x * speed;
        const offsetY = y * speed;
        icon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    const handleMouseLeave = () => {
      icons.forEach((icon) => {
        icon.style.transform = "translate(0, 0)";
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="floating-icons">
      <div
        className="floating-icon icon-1"
        data-tooltip="let's talk about bikes please"
      >
        <Image
          src="/images/bike.png"
          alt="bike drawing"
          className="icon-img"
          width={42}
          height={42}
        />
      </div>
      <div
        className="floating-icon icon-2"
        data-tooltip="certified cat person"
      >
        <Image
          src="/images/cat.png"
          alt="cat drawing"
          className="icon-img"
          width={42}
          height={42}
        />
      </div>
      <div
        className="floating-icon icon-3"
        data-tooltip="me and local coffee shops"
      >
        <Image
          src="/images/coffee.png"
          alt="coffee drawing"
          className="icon-img"
          width={42}
          height={42}
        />
      </div>
      <div
        className="floating-icon icon-4"
        data-tooltip="summit views >>>>"
      >
        <Image
          src="/images/hike.png"
          alt="mountain drawing"
          className="icon-img"
          width={42}
          height={42}
        />
      </div>
      <div
        className="floating-icon icon-5"
        data-tooltip="passport always ready"
      >
        <Image
          src="/images/plane.png"
          alt="plane drawing"
          className="icon-img"
          width={42}
          height={42}
        />
      </div>
      <div
        className="floating-icon icon-6"
        data-tooltip="hola, estoy aprendiendo!"
      >
        <Image
          src="/images/spanish.png"
          alt="spanish drawing"
          className="icon-img"
          width={42}
          height={42}
        />
      </div>
    </div>
  );
}
