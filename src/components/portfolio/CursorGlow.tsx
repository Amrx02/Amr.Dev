import { useRef, useEffect } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mv = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", mv);
    return () => window.removeEventListener("mousemove", mv);
  }, []);
  return (
    <div
      ref={ref}
      className="fixed pointer-events-none z-[9999] w-[420px] h-[420px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-100 hidden md:block"
      style={{ background: "radial-gradient(circle,#7C5CFC14 0%,transparent 70%)" }}
    />
  );
}
