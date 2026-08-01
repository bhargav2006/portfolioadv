import { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const clicked = useRef(false);

  const updateCursor = useCallback(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    // Dot follows instantly
    dot.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;

    // Ring follows with slight easing (faster than before: 0.25 instead of 0.15)
    ring.current.x += (mouse.current.x - ring.current.x) * 0.25;
    ring.current.y += (mouse.current.y - ring.current.y) * 0.25;
    ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)${clicked.current ? " scale(0.75)" : ""}`;

    requestAnimationFrame(updateCursor);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onDown = () => {
      clicked.current = true;
      dotRef.current?.classList.add("!scale-75");
      setTimeout(() => {
        clicked.current = false;
        dotRef.current?.classList.remove("!scale-75");
      }, 150);
    };

    const applyHover = (el: Element) => {
      const tag = el.tagName.toLowerCase();
      const role = el.getAttribute("role");
      const isClickable = tag === "a" || tag === "button" || role === "button" || el.closest("a, button, [role='button']");
      const isImage = tag === "img" || el.closest("img") || el.classList.contains("card-glass");
      const isText = tag === "p" || tag === "span" || tag === "h1" || tag === "h2" || tag === "h3" || tag === "h4" || tag === "h5" || tag === "h6" || tag === "li" || tag === "label";

      if (isClickable) {
        ringRef.current?.setAttribute("data-hover", "clickable");
        dotRef.current?.setAttribute("data-hover", "clickable");
      } else if (isImage) {
        ringRef.current?.setAttribute("data-hover", "image");
        dotRef.current?.setAttribute("data-hover", "image");
      } else if (isText) {
        ringRef.current?.setAttribute("data-hover", "text");
        dotRef.current?.setAttribute("data-hover", "text");
      }
    };

    const clearHover = () => {
      ringRef.current?.removeAttribute("data-hover");
      dotRef.current?.removeAttribute("data-hover");
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target) applyHover(target);
    };

    const onOut = () => clearHover();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.style.cursor = "none";

    const raf = requestAnimationFrame(updateCursor);

    // Hide default cursor on all interactive elements
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
      document.getElementById("custom-cursor-style")?.remove();
    };
  }, [updateCursor]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none
          w-[6px] h-[6px] rounded-full bg-foreground
          transition-[width,height,opacity,background-color] duration-200 ease-out
          data-[hover=clickable]:w-0 data-[hover=clickable]:h-0 data-[hover=clickable]:opacity-0
          data-[hover=text]:w-[8px] data-[hover=text]:h-[8px] data-[hover=text]:opacity-70
          data-[hover=image]:w-[10px] data-[hover=image]:h-[10px]"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none
          w-7 h-7 rounded-full border border-foreground/20
          transition-[width,height,border-color,box-shadow,opacity] duration-300 ease-out
          data-[hover=clickable]:w-12 data-[hover=clickable]:h-12 data-[hover=clickable]:border-primary/50 data-[hover=clickable]:shadow-[0_0_15px_hsl(var(--primary)/0.2)]
          data-[hover=text]:w-9 data-[hover=text]:h-9 data-[hover=text]:opacity-60
          data-[hover=image]:w-14 data-[hover=image]:h-14 data-[hover=image]:border-primary/30"
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;
