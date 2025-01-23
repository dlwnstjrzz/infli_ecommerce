"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const banners = [
  {
    id: 1,
    image:
      "https://kream-phinf.pstatic.net/MjAyNTAxMjJfNjgg/MDAxNzM3NTI4OTU2NjE5.iR-Dx3QlH2qUtU99eAzTPb97cXG1acpiRIFBlp2YyBAg.IilUgUWsciStRf7W7-gHF-4sCXhjsLcpFN7XTMaIaEwg.JPEG/a_a9f2b97a2bf944bb8d0ccb2dbcf4d4be.jpg?type=l_webp",
  },
  {
    id: 2,
    image:
      "https://kream-phinf.pstatic.net/MjAyNTAxMTBfMjY0/MDAxNzM2NDc0OTUzMTMz.vtZlv9MqvciDLULTUDNXXNyQ5ikL601P7n5jak2RZ9Ig.nb7gTiuHFFyYmXdm2HMy4dMeGQrUwOzmtd98N1E-Mh0g.PNG/a_a9558360274c469a964ea8b853f6eec0.png?type=l_webp",
  },
  {
    id: 3,
    image:
      "https://kream-phinf.pstatic.net/MjAyNTAxMTVfMTEz/MDAxNzM2OTI2MTY2Njk5.HuHseNAb_wDKluzhpby2t1AIC1CzA6I7imGM1-DjiwQg.37EWv0sr7VDJAk0ZtX7b3qlHSqyuqJHhRLSDRN1glYUg.JPEG/a_bdd6836ea5384b78a59256ced58f94e5.jpg?type=l_webp",
  },
];

const AUTOPLAY_INTERVAL = 3500;

export function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi || !mounted) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setProgress(0);
    });

    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, AUTOPLAY_INTERVAL);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (AUTOPLAY_INTERVAL / 100);
      });
    }, 100);

    return () => {
      clearInterval(autoplayInterval);
      clearInterval(progressInterval);
    };
  }, [emblaApi, mounted]);

  if (!mounted) {
    return (
      <div className="relative">
        <div className="aspect-[2/1] bg-gray-200" />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner) => (
            <div key={banner.id} className="flex-[0_0_100%]">
              <Image
                src={banner.image}
                alt="Banner"
                width={750}
                height={375}
                className="w-full"
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-4">
        {scrollSnaps.map((_, index) => (
          <div
            key={index}
            className="h-1 flex-1 rounded-full overflow-hidden bg-gray-500"
          >
            <div
              className="h-full bg-white transition-transform duration-100 ease-linear"
              style={{
                transform: `scaleX(${
                  index === selectedIndex ? progress / 100 : 0
                })`,
                transformOrigin: "0 50%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
