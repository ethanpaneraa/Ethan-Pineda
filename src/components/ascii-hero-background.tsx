"use client";
import React, { useEffect, useRef } from "react";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { ASCIIRenderer } from "@/components/ascii-renderer";

export default function ASCIIBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dimensions = useWindowDimensions();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderer = new ASCIIRenderer(ctx);
    let animationFrameId: number;

    const animate = () => {
      renderer.render(canvas);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions]);

  return (
    <div className="opacity-30">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}
