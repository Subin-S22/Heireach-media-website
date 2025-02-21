"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { title } from 'process';

export default function AboutUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredBrandIndex, setHoveredBrandIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section>
      <section id="about-us-section" className='bg-black font-amazingSlab pb-20 px-10'>
          {/* About HEIREACH MEDIA */}
        <div className="mb-12 pt-20 px-20 xs:px-0">
          <h1 className="text-2xl text-white mx-auto  font-amazingSlab font-bold">About <span className="text-blue-500">HEIREACH MEDIA</span></h1>
          <h2 className="text-2xl font-bold mx-auto xs:text-xl font-amazingSlab text-blue-500 mt-2">Highlighting Brands That Matter</h2>
          <p className="mt-4 mx-auto font-amazingSlab text-white xs:text-xs xs:text-justify">
            At <span className="font-bold ">Heireach Media</span>, we don’t just create designs—we craft experiences that leave a lasting impact. Born from a passion for storytelling and innovation, our creative agency is dedicated to elevating brands that matter. Whether it’s building a compelling visual identity, crafting engaging digital experiences, or producing captivating content, we make sure your brand stands out in a crowded marketplace.
          </p>
        </div>

        {/* Our Vision & Mission */}
        <div className="bg-[#0f0f0f] relative text-white pb-10 px-6 md:px-16">
      <div className="grid relative md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Vision Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center xs:pt-3 md:justify-start space-x-2">
            <h2 className="text-xl font-bold text-blue-500">Vision</h2>
            <Image src="/images/vision-icon.svg" className='md:top-[-4%] md:left-[5%] xs:top-[-2%] xs:right-[16%] absolute ' alt="Vision Icon" width={70} height={70} />
          </div>
          <h3 className="font-bold text-lg">Shaping the Future of Brands</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            To be the driving force behind brands that inspire, innovate, and influence. We believe in creativity that
            not only looks good but also works effectively, delivering real value to businesses.
          </p>
          <hr className="border-gray-600 w-full mx-auto" />
        </div>

        {/* Center Quote Icon */}
        <div className="flex justify-center items-center">
          <Image src="/images/layer-seperator.svg" alt="Quote Icon" width={140} height={140} />
        </div>
        <div className="md:hidden lg:hidden xs:block">
          <hr className="border-gray-600 w-full mx-auto" />
        </div>
        {/* Mission Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-end space-x-2">
          <Image src="/images/mission-icon.svg" className='md:top-[-4%] md:right-[5%] xs:top-[-2%] xs:left-[10%] xs:static md:absolute' alt="Mission Icon" width={70} height={70} />

            <h2 className="text-xl font-bold text-blue-500">Mission</h2>
          </div>
          <h3 className="font-bold text-lg">Turning Ideas into Iconic Brands</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We exist to transform ideas into powerful brand stories. By blending strategy, design, and cutting-edge
            technology, we empower businesses to connect with their audience on a deeper level.
          </p>
          <hr className="border-gray-600 w-full mx-auto" />
        </div>
      </div>

      {/* What We Do Best Section */}
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold text-blue-500">What We Do Best?</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300 text-sm mt-4">
          <ul className="space-y-2">
            <li>• Branding & Identity</li>
            <li>• UI/UX & Web Design</li>
            <li>• AI-Powered Solutions</li>
          </ul>
          <ul className="space-y-2">
            <li>• Social Media & Marketing</li>
            <li>• Creative Content</li>
            <li>• Video Production</li>
          </ul>
        </div>
      </div>
    </div>

        {/* What We Do Best */}
        

      </section>
      <section id="why-choose-us-section" className="relative bg-black text-white py-16 overflow-hidden">
        
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
            className={`text-[32px] mx-auto max-w-[913px] font-amazingSlab font-bold text-blue-500 xs:text-center md:text-center lg:text-left transition-opacity duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Why Choose Us?
          </h2>

          <p
            className={`mt-4 text-lg xs:text-center md:text-center lg:text-left font-amazingSlab max-w-[913px] leading-[22.5px] mx-auto transition-opacity duration-700 delay-150 ease-out ${
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
        </div>
    </section>
    <section className="bg-black text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-[32px] mx-auto max-w-[913px] font-amazingSlab font-bold text-blue-500 mb-4 xs:text-center md:text-center lg:text-left">Brands That Matter</h2>
        <p className="mb-8 mt-4 mx-auto max-w-[913px] text-lg xs:text-center md:text-center lg:text-left text-gray-300 font-amazingSlab">
          We’re proud to have partnered with clients across all the industries. Delivering impactful results for startups, SMEs,
          and global enterprises. Our collaborative projects have spanned
        </p>
        <div className="flex flex-wrap gap-[5rem] justify-center">
          {brands.map((brand, index) => (
           <div
            className="flex-[0_0_calc(21%-20px)] xs:flex-[0_0_calc(35%-20px)] flex justify-center items-center"
            onMouseEnter={() => setHoveredBrandIndex(index)}
            onMouseLeave={() => setHoveredBrandIndex(null)}
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
          </div>
          ))}
        </div>

      </div>
    </section>
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