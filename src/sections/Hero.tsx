import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Diagonal Line */}

      <div className="hidden xl:block absolute top-0 left-1/2 w-[1px] h-[900px] bg-[#e7e7e7] rotate-[55deg] origin-top"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 lg:pt-20 relative">

        {/* Top Row */}

        <div className="flex items-start justify-between">

          <p className="text-[24px] lg:text-[32px] font-semibold">
            Hi there! 👋 I’m
          </p>

          {/* Contact Circle */}

          <div className="hidden xl:flex items-center justify-center w-[130px] h-[130px] rounded-full border border-black text-center text-[12px] tracking-[4px] uppercase leading-[2]">
            Contact
            <br />
            Me
          </div>

        </div>

        {/* Heading */}

        <h1 className="text-[70px] md:text-[60px] lg:text-[60px] leading-[0.92] font-black tracking-[-3px] mt-8 max-w-[1100px]">
           Build something awesome!
        </h1>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-[42%_58%] gap-6 items-center mt-6">

          {/* LEFT */}

          <div className="relative h-[520px] flex items-end justify-center lg:justify-start">

            {/* Gradient Glow */}

            <div className="absolute w-[420px] h-[420px] bg-gradient-to-br from-[#ff6b00]/30 via-[#ffb347]/20 to-transparent blur-[90px] rounded-full bottom-10 left-0"></div>

            {/* Decorative Circle */}

            <div className="hidden lg:block absolute top-[60px] right-[20px] w-[90px] h-[90px] rounded-full border border-[#dcdcdc] z-20"></div>

            {/* Image */}

            <div className="relative z-10">

              <Image
                src="/images/deepak.png"
                alt="Deepak Kumar"
                width={360}
                height={500}
                className="object-contain"
                priority
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="pb-8 lg:pb-0">

            <p className="text-[24px] md:text-[34px] leading-[1.5] text-[#555] max-w-[680px] font-medium">
             Building elegant digital products
  where modern frontend engineering
  meets premium user experience.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap items-center gap-5 mt-10">

              <button className="bg-black text-white px-10 py-5 rounded-full text-[18px] font-medium hover:bg-[#222] transition-all duration-300">
                Let’s Talk ↗
              </button>

              <button className="border border-black px-10 py-5 rounded-full text-[18px] font-medium hover:bg-black hover:text-white transition-all duration-300">
                Download CV ↗
              </button>

            </div>

            {/* Social */}

            <div className="flex items-center gap-6 mt-12">

              <div className="hidden lg:block w-24 h-[1px] bg-black"></div>

              <div className="flex gap-4">

                {["in", "gh", "be", "dr"].map((item) => (
                  <div
                    key={item}
                    className="w-[58px] h-[58px] rounded-full bg-[#ededed] flex items-center justify-center text-[16px] uppercase font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Background Text */}

        <h2 className="hidden lg:block absolute bottom-[-10px] right-0 text-[80px] font-black text-transparent [-webkit-text-stroke:1px_#dddddd] opacity-70 leading-none">
FULL STACK DEVELOPER        </h2>

      </div>

    </section>
  );
}