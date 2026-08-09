"use client";
import React, { useEffect, useRef } from "react";
import { ASCIIRenderer } from "@/components/ascii-renderer";

export default function ASCIIBackground({
  className = "",
  renderHeightOffsetVw = 0,
}: {
  className?: string;
  renderHeightOffsetVw?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let renderer: ASCIIRenderer | null = null;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = Math.floor(width);
      canvas.height = Math.floor(
        height + (window.innerWidth * renderHeightOffsetVw) / 100
      );

      const context = canvas.getContext("2d");
      renderer = context ? new ASCIIRenderer(context) : null;
    };

    const animate = () => {
      renderer?.render(canvas);
      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    animate();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [renderHeightOffsetVw]);

  return (
    <div ref={containerRef} className={`opacity-30 ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
