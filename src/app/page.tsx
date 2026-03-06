import Image from "next/image";
import photos from "../../content/photos/index.json";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          className="w-full h-[80vh] object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center">
        {photos.map((photo, i) => {
          const isPortrait = photo.height > photo.width;
          const isSquare =
            Math.abs(photo.width - photo.height) / photo.width < 0.1;

          const widthClass = isPortrait
            ? "max-w-[360px] md:max-w-[420px]"
            : isSquare
              ? "max-w-[450px] md:max-w-[520px]"
              : "max-w-[650px] md:max-w-[750px]";

          return (
            <div
              key={i}
              className={`w-full px-6 my-20 md:my-32 flex justify-center`}
            >
              <div className={`w-full ${widthClass}`}>
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 1000px"
                  priority={i === 0}
                />
                {photo.caption && (
                  <p className="mt-4 text-right text-xs font-light text-gray-400 tracking-wide">
                    {photo.caption}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
