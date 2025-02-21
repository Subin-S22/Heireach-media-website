import Image from "next/image";
export default function AboutUsDescription(){
    
    return(
        <section id="about-us-description" className='bg-black font-amazingSlab pb-20 px-10'>
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
                    <Image src="/images/vision-icon.svg"  alt="Vision Icon" width={70} height={70} />
                </div>
                <h3 className="font-bold text-lg lg:text-lg md:text-sm">Shaping the Future of Brands</h3>
                <p className="text-gray-300 text-lg lg:text-lg md:text-sm leading-relaxed">
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
                <Image src="/images/mission-icon.svg"  alt="Mission Icon" width={70} height={70} />

                    <h2 className="text-xl font-bold text-blue-500">Mission</h2>
                </div>
                <h3 className="font-bold md:text-sm text-lg lg:text-lg">Turning Ideas into Iconic Brands</h3>
                <p className="text-gray-300 text-lg lg:text-lg md:text-sm leading-relaxed">
                    We exist to transform ideas into powerful brand stories. By blending strategy, design, and cutting-edge
                    technology, we empower businesses to connect with their audience on a deeper level.
                </p>
                <hr className="border-gray-600 w-full mx-auto" />
                </div>
            </div>

            {/* What We Do Best Section */}
            <div className="text-center mt-10 text-lg lg:text-lg md:text-sm">
                <h2 className="text-xl font-bold text-blue-500">What We Do Best?</h2>
                <div className="flex gap-4 md:text-justify xs:flex-col text-lg lg:text-lg md:text-sm xs:test-center items-center justify-center text-gray-300 text-lg mt-4">
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
    )
}

