import useWindowSize from "@/lib/function/useWindowSize";
import { image } from "motion/react-client";
import Image from "next/image";

const images = [
  "/images/marquee/Figma.png",
  "/images/marquee/Illustrator.png",
  "/images/marquee/Photoshop.png",
  "/images/marquee/Sketch.png",
  "/images/marquee/Figma.png",
  "/images/marquee/Illustrator.png",
  "/images/marquee/Photoshop.png",
  "/images/marquee/Sketch.png",
  "/images/marquee/Figma.png",
  "/images/marquee/Illustrator.png",
  "/images/marquee/Photoshop.png",
  "/images/marquee/Sketch.png",
  "/images/marquee/Figma.png",
  "/images/marquee/Illustrator.png",
  "/images/marquee/Photoshop.png",
  "/images/marquee/Sketch.png",
];

export function Figma() {
  const { width } = useWindowSize();

  return (
    <div className="pic-container h-20">
      {images.map((src, index) => {
        return (
          <div className="pic" key={src + index}>
            <Image
              src={src}
              alt={src}
              width={width > 800 ? 160 : 100}
              height={width > 800 ? 160 : 100}
            />
          </div>
        );
      })}
    </div>
  );
}
