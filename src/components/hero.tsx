import ASCIIBackground from "@/components/ascii-hero-background";
import ShortBio from "@/components/short-bio";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-background">
      <ASCIIBackground />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <ShortBio />
      </div>
    </div>
  );
}
