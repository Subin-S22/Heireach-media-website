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
  return (
    <div className="pic-container h-20">
      {images.map((src, index) => {
        return (
          <div className="pic" key={src + index}>
            <Image src={src} alt={src} width={160} height={160} />
          </div>
        );
      })}
    </div>
  );
}
