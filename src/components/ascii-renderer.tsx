import { Point } from "@/types/hero";
import { map, sdBox, opSmoothUnion, transform } from "@/lib/math";

export class ASCIIRenderer {
  private readonly density = "▚▀abc|/:÷×+-=?*· ";
  private readonly ctx: CanvasRenderingContext2D;
  private readonly startTime: number;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.startTime = Date.now();
  }

  render(canvas: HTMLCanvasElement) {
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    const time = (Date.now() - this.startTime) * 0.001;
    const cols = Math.floor(canvas.width / 10);
    const rows = Math.floor(canvas.height / 20);
    const m = Math.max(cols, rows);
    const aspect = canvas.height / canvas.width;

    this.setupContext();
    this.renderGrid(cols, rows, m, aspect, time);
  }

  private setupContext() {
    this.ctx.font = "10px monospace";
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
  }

  private renderGrid(
    cols: number,
    rows: number,
    m: number,
    aspect: number,
    time: number
  ) {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const st: Point = {
          x: (2.0 * (x - cols / 2)) / m,
          y: (2.0 * (y - rows / 2)) / m / aspect,
        };

        const d = this.calculateDistance(st, time);
        const c = 1.0 - Math.exp(-5 * Math.abs(d));
        const index = Math.floor(c * this.density.length);

        this.ctx.fillText(
          this.density[Math.min(index, this.density.length - 1)],
          x * 10 + 5,
          y * 20 + 10
        );
      }
    }
  }

  private calculateDistance(st: Point, time: number): number {
    let d = 1e100;
    const s = map(Math.sin(time * 0.5), -1, 1, 0.0, 0.4);
    const g = 1.2;

    for (let by = -g; by <= g; by += g * 0.33) {
      for (let bx = -g; bx <= g; bx += g * 0.33) {
        const r = time * 0.4 * (bx + g * 2) + (by + g * 2);
        const f = transform(st, { x: bx, y: by }, r);
        const d1 = sdBox(f, { x: g * 0.33, y: 0.01 });
        d = opSmoothUnion(d, d1, s);
      }
    }

    return d;
  }
}
