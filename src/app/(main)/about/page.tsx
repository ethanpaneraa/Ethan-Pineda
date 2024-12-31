import AboutContent from "@/components/about/about-content";
import { ProfileImage } from "@/components/about/project-image";
import { SocialLinks } from "@/components/about/social-links";
import WakaTimeStats from "@/components/stats";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1">
          <AboutContent />
          <WakaTimeStats />
        </div>
        <div className="flex flex-col gap-8 w-full lg:w-auto">
          <ProfileImage />
          <div className="px-4 lg:px-0">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}
