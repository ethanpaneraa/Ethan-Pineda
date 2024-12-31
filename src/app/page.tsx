import ASCIIBackground from "@/components/ascii-hero-background";
import ShortBio from "@/components/short-bio";
import HomePageNavigationBar from "@/components/home-page-nav";
import CardLayout from "@/components/card-layout";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full">
        <div className="min-h-screen bg-background">
          <ASCIIBackground />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <CardLayout>
              <ShortBio />
              <div className="py-2 mt-4 flex flex-col justify-center items-center gap-4 text-xs md:text-sm">
                <p className="text-xs">
                  click or press on your keyboard to navigate
                </p>
                <HomePageNavigationBar />
              </div>
            </CardLayout>
          </div>
        </div>
      </div>
    </div>
  );
}
