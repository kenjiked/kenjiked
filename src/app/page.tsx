import Image from "next/image";
import rows from "../../content/photos/index.json";

type Photo = {
  src: string;
  caption: string;
  width: number;
  height: number;
};

type Row = {
  layout: "single" | "pair";
  photos: Photo[];
};

function PhotoItem({ photo, priority }: { photo: Photo; priority?: boolean }) {
  return (
    <div>
      <Image
        src={photo.src}
        alt={photo.caption}
        width={photo.width}
        height={photo.height}
        className="w-full h-auto"
        sizes="(max-width: 768px) 90vw, 50vw"
        priority={priority}
      />
      {photo.caption && (
        <p className="mt-3 text-right text-xs font-light text-gray-400 tracking-wide">
          {photo.caption}
        </p>
      )}
    </div>
  );
}

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
      <div className="max-w-[1100px] mx-auto px-6">
        {(rows as Row[]).map((row, i) => {
          if (row.layout === "pair") {
            return (
              <div
                key={i}
                className="my-16 md:my-28 grid grid-cols-2 gap-4 md:gap-6"
              >
                {row.photos.map((photo, j) => (
                  <PhotoItem key={j} photo={photo} />
                ))}
              </div>
            );
          }

          const photo = row.photos[0];
          const isPortrait = photo.height > photo.width;
          const isSquare =
            Math.abs(photo.width - photo.height) / photo.width < 0.1;

          return (
            <div
              key={i}
              className="my-16 md:my-28 flex justify-center"
            >
              <div
                className={`w-full ${
                  isPortrait
                    ? "max-w-[420px]"
                    : isSquare
                      ? "max-w-[520px]"
                      : "max-w-[900px]"
                }`}
              >
                <PhotoItem photo={photo} priority={i === 0} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
