import { Point, Size } from "@/types/hero";

export const map = (
  v: number,
  inA: number,
  inB: number,
  outA: number,
  outB: number
): number => {
  return outA + (outB - outA) * ((v - inA) / (inB - inA));
};

export const sdBox = (p: Point, size: Size): number => {
  const d = {
    x: Math.abs(p.x) - size.x,
    y: Math.abs(p.y) - size.y,
  };
  return (
    Math.sqrt(Math.max(d.x, 0) ** 2 + Math.max(d.y, 0) ** 2) +
    Math.min(Math.max(d.x, d.y), 0.0)
  );
};

export const opSmoothUnion = (d1: number, d2: number, k: number): number => {
  const h = Math.max(0.0, Math.min(1.0, 0.5 + (0.5 * (d2 - d1)) / k));
  return d2 * (1 - h) + d1 * h - k * h * (1.0 - h);
};

export const transform = (p: Point, trans: Point, rot: number): Point => {
  const s = Math.sin(-rot);
  const c = Math.cos(-rot);
  const dx = p.x - trans.x;
  const dy = p.y - trans.y;
  return {
    x: dx * c - dy * s,
    y: dx * s + dy * c,
  };
};
