"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {motion} from 'motion/react'

const extend = {
  rest: {
    opacity:0,
    width: 200,
  },
  hover: {
    opacity:1,
    width: 300,
  },
};

type Extend = 'hover' | 'rest';
type Index = '0' | '1' | '2' | '3'

type Content = `${Extend}-${Index}`

export default function AboutUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [contentExtend, setExtend] = useState<
  Content>('rest-0');

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about-us-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = sectionTop < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animateExtend = (type: Content, index:number)=>{
    const [typeName, indexNumber] = type.split('-'); 
    const num = Number(indexNumber);
    if(num === index){
      return typeName
    }
    return 'rest';

  }

  return (
    <section id="about-us-section" className="relative bg-black text-white py-16 overflow-hidden">
      {/* Top Left Image */}
      <div className="absolute top-0 left-0 w-[150px] h-[200px] animate-slideInFromLeft">
        <Image
          className="h-auto"
          src="/images/AboutUsTopLeft.svg"
          alt="Side Graphic Top Left"
          layout="fill"
        />
      </div>

      {/* Bottom Right Image */}
      <div className="absolute bottom-0 right-0 w-[150px] h-[200px] animate-slideInFromRight">
        <Image
          src="/images/AboutUsBootomRight.svg"
          alt="Side Graphic Bottom Right"
          layout="fill"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <h2
          className={`text-[32px] mx-auto max-w-[913px] font-amazingSlab font-bold text-blue-500 transition-opacity duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Why Choose Us?
        </h2>

        <p
          className={`mt-4 text-lg font-amazingSlab max-w-[913px] leading-[22.5px] mx-auto transition-opacity duration-700 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          At Heireach Media, we don’t just execute marketing—we craft strategic, data-driven roadmaps that position your brand for long-term success & market dominance. We analyze, innovate & implement solutions that ensure brand stability, scalability & impact.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-[6rem] relative">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative flex flex-col items-center text-center cursor-pointer transition-all duration-300 ease-out ${
                isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
              } ${hoveredIndex === index ? 'max-w-[350px]' : 'max-w-[300px]'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-[150px] h-[150px] mb-4 bg-[#D6D6D6] rounded-[5px] shrink-0">
                <Image src={feature.icon} alt={feature.title} layout="fill" objectFit="contain" />
              </div>
              <div
                className={`absolute left-[150px] top-0 h-[150px] bg-blue-600 text-white text-sm p-4 rounded-r-lg shadow-lg transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? 'w-[300px] opacity-100' : 'w-0 opacity-0'
                }`}
              >
                {feature.description}
              </div>
              <h3 className="font-bold font-amazingSlab leading-[25px] text-xl">{feature.title}</h3>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`relative flex flex-col items-center text-center cursor-pointer transition-all duration-300 ease-out ${
                isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
              } ${hoveredIndex === index ? 'max-w-[350px]' : 'max-w-[300px]'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              whileHover="hover"
              initial= "rest"
              onHoverStart={()=>{
                setExtend(`hover-${index}` as Content)
              }}
              onHoverEnd={()=>setExtend(`rest-${index}` as Content)}
              // onMouseEnter={() => setHoveredIndex(index)}
              // onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex">
              <motion.div className="relative w-[150px] h-[150px] mb-4 bg-[#D6D6D6] rounded-[5px] shrink-0">
                <Image src={feature.icon} alt={feature.title} layout="fill" objectFit="contain" />
              </motion.div>
              <motion.div
              className='w-[200px]'
              variants={extend}
              animate={animateExtend(contentExtend, index)}
              >
                {feature.description}
              </motion.div>
              </div>
              <h3 className="font-bold font-amazingSlab leading-[25px] text-xl">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
const features = [

  {

  title: 'Creative Expertise',

 icon: '/images/Creative-Expertise.svg',

 description: 'Innovative solutions tailored to captivate your audience and set your brand apart.'

  },

  {

  title: 'Client Focused',

  icon: '/images/Client-Focused.svg',

  description: 'We prioritize your needs and work collaboratively to achieve your goals.'

  },

  {

  title: 'Proven Results',

  icon: '/images/Proven-Result.svg',

  description: 'With a track record of High-Performance Campaigns & Measurable Success, we ensure Brand Visibility, Engagement & Tangible ROI.'

  },

  {

  title: 'One Stop-Shop',

  icon: '/images/One-stop-shop.svg',

  description: 'Comprehensive marketing services under one roof to streamline your brand growth.'

  },

];