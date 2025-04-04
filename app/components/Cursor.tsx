"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = () => setHovering(true);
    const mouseLeave = () => setHovering(false);

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("button, a").forEach((element) => {
      element.addEventListener("mouseenter", mouseEnter);
      element.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("button, a").forEach((element) => {
        element.removeEventListener("mouseenter", mouseEnter);
        element.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovering ? "cursor-hover" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
