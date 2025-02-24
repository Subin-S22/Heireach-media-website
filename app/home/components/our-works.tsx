import Image from 'next/image';
import { motion } from "framer-motion";

export default function OurWorks() {
  return (
    <section className="flex flex-col lg:flex-row items-center font-amazingSlab lg:justify-center lg:gap-16 justify-between bg-black text-white px-6 lg:px-10 py-20 space-y-10 lg:space-y-0">
      {/* Left Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-6xl  md:text-4xl flex lg:gap-6 flex-col md:gap-4  xs:gap-3 font-bold leading-tight">
          We Exist Because <br />
          <span className="text-blue-500">The World Needs Us</span>
        </h1>
        <p className="mt-4 text-lg lg:text-3xl flex flex-col lg:gap-4 md:gap-2 xs:gap-2">A Creative Agency <span> That Drives <span className="font-rockwellNova">40+</span> Brands </span></p>
        <a href="#" className="mt-6 inline-flex  items-center lg:text-2xl text-blue-500 hover:underline">
          View All Works 
          <span className="ml-2">
            <Image src={"/images/upper-right-arrow.svg"} alt="Right arrow" 
                    width={30} 
                    height={40}
                    className="w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 lg:w-10 lg:h-12">
            </Image>
          </span>
        </a>
      </div>

      {/* Right Globe */}
      <div className="flex justify-center items-center">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-90 lg:h-90 rounded-full overflow-hidden shadow-lg relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }} // Moves left continuously
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute flex w-[200%] h-full"
          >
            {/* Duplicate Image for Smooth Looping */}
            <Image 
              src="/images/world.jpeg" 
              alt="Globe" 
              width={800} 
              height={400} 
              className="object-cover h-full"
            />
            <Image 
              src="/images/world.jpeg" 
              alt="Globe Duplicate" 
              width={800} 
              height={400} 
              className="object-cover h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
