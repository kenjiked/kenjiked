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
    <div className="relative">
      <Image
        src={photo.src}
        alt={photo.caption}
        width={photo.width}
        height={photo.height}
        className="w-full h-full object-cover"
        sizes="(max-width: 768px) 95vw, 800px"
        priority={priority}
      />
      {photo.caption && (
        <p className="mt-2 text-right text-[11px] font-light text-gray-400 tracking-wide">
          {photo.caption}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[100vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="kenjiked"
            width={1280}
            height={670}
            className="w-[280px] md:w-[400px] h-auto"
            priority
          />
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto px-8 md:px-12 py-12 md:py-20">
        {(rows as Row[]).map((row, i) => {
          if (row.layout === "pair") {
            // 2枚の高さを揃えるため、アスペクト比からflex比率を計算
            const ratios = row.photos.map((p) => p.width / p.height);
            const totalRatio = ratios.reduce((a, b) => a + b, 0);

            return (
              <div
                key={i}
                className="my-10 md:my-16 flex gap-3 md:gap-4"
              >
                {row.photos.map((photo, j) => (
                  <div
                    key={j}
                    style={{ flex: `${ratios[j] / totalRatio}` }}
                  >
                    <PhotoItem photo={photo} />
                  </div>
                ))}
              </div>
            );
          }

          return (
            <div key={i} className="my-10 md:my-16">
              <PhotoItem photo={row.photos[0]} priority={i === 0} />
            </div>
          );
        })}
      </div>
    </>
  );
}
