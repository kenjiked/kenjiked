import Image from "next/image";
import photos from "../../content/photos/index.json";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      {photos.map((photo, i) => (
        <div key={i} className="my-16 md:my-24">
          <div className="relative w-full">
            <Image
              src={photo.src}
              alt={photo.caption}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority={i === 0}
            />
          </div>
          {photo.caption && (
            <p className="mt-3 text-right text-xs font-light text-gray-400 tracking-wide">
              {photo.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
