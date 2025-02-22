"use client"
import {useState } from 'react';
import { motion } from 'motion/react';
import Image from "next/image"
export default function Brands(){
    const [hoveredBrandIndex, setHoveredBrandIndex] = useState<number | null>(null);
    return(
        <section className="bg-black text-white py-12">
            <div className="container mx-auto">
                <h2 className="text-[32px] md:mx-[3rem] lg:mx-[auto] mx-auto max-w-[913px] font-amazingSlab font-bold text-blue-500 mb-4 xs:text-center md:text-center lg:text-left">Brands That Matter</h2>
                <p className="mb-8 mt-4 mx-auto md:mx-[3rem] lg:mx-[auto] max-w-[913px] text-lg xs:text-center md:text-center lg:text-left text-gray-300 font-amazingSlab">
                    We're proud to have partnered with clients across all the industries. Delivering impactful results for startups, SMEs,
                    and global enterprises. Our collaborative projects have spanned
                </p>
                <div className="flex flex-wrap gap-[5rem] justify-center">
                    {brands.map((brand, index) => (
                    <motion.div
                    className="flex-[0_0_calc(21%-20px)] xs:flex-[0_0_calc(35%-20px)] flex justify-center items-center"
                    onHoverStart={() => setHoveredBrandIndex(index)}
                    onHoverEnd={() => setHoveredBrandIndex(null)}
                    key={brand.title}
                    >
                    <div className="relative h-[90px] w-full">
                        <Image
                        src={hoveredBrandIndex === index ? brand.icon : brand.iconshaded}
                        alt={brand.title}
                        fill
                        style={{ objectFit: "contain" }}
                        />
                    </div>
                    </motion.div>
                    ))}
                </div>
        
            </div>
      </section>
    )
}

const brands =[
    {
      title: 'Glow Up',
      iconshaded:'/images/glow-shaded-logo.svg',
      icon:'/images/glowup-logo.svg'
    },
    {
      title:'Km Interiors',
      iconshaded:'/images/km-interiors-shaded-logo.svg',
      icon:'/images/km-interiors-logo.svg'
    },
    {
      title:'Bake Mate',
      iconshaded: '/images/bake-mate-shaded-logo.svg',
      icon:'/images/bake-mate-logo.svg'
    },
    {
      title:'Adavi',
      iconshaded:'/images/adavi-shaded-logo.svg',
      icon:'/images/adavi-logo.svg'
    },
    {
      title:'Lotus Care',
      iconshaded:'/images/lotus-care-shaded-logo.svg',
      icon:'/images/lotus-care-logo.svg'
    },
    {
      title:'Pulse Fit',
      iconshaded:'/images/pulse-fit-shaded-logo.svg',
      icon:'images/pulse-fit-logo.svg'
    },
    {
      title:'Sj Electronics',
      iconshaded:'/images/sj-electonic-shaded-logo.svg',
      icon:'/images/sj-electronic.svg'
    }
  ]