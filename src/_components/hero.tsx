"use client";
import React, { useEffect, useRef } from "react";
import { useWindowDimensions } from "@/_hooks/useWindowDimensions";
import { ASCIIRenderer } from "@/_components/ascii-renderer";
import { ProfileInfo } from "@/_components/short-bio";

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
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <ProfileInfo />
      </div>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
