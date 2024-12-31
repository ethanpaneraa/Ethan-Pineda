import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="aspect-square w-full lg:w-[500px] relative rounded-xl overflow-hidden">
      <Image
        src="/me-dithered-image.png"
        alt="Profile picture"
        fill
        quality={100}
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-cover"
        priority
      />
    </div>
  );
}
