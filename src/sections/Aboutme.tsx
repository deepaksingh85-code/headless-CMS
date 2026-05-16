import Image from "next/image";

export default function Aboutme() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f3] pt-[140px] pb-[140px] lg:pt-[220px] lg:pb-[180px]">

      <div className="max-w-[1550px] mx-auto px-[24px] md:px-[50px] lg:px-[90px]">

        {/* TOP */}

        <div className="mb-[140px]">

          <p className="text-[16px] uppercase tracking-[4px] text-[#ff6b00] mb-[28px]">
            About Me
          </p>

          <div className="w-[120px] h-[2px] bg-black relative mb-[60px]">

            <span className="w-5 h-5 rounded-full bg-black absolute right-0 top-1/2 -translate-y-1/2"></span>

          </div>

          <h2 className="text-[44px] md:text-[72px] lg:text-[96px] leading-[0.98] font-black tracking-[-5px] max-w-[1450px] mb-[40px]">

            I build modern digital experiences with{" "}

            <span className="text-[#ff6b00]">
              premium frontend
            </span>{" "}

            design, scalable architecture and high performance development.

          </h2>

        </div>

        {/* CONTENT */}

        <div className="grid lg:grid-cols-[0.9fr_1fr] gap-[120px] items-center">

          {/* LEFT */}

          <div className="relative pl-[40px]">

            {/* Border */}

            <div className="absolute left-0 top-0 w-full h-full border border-[#d8d8d8] rounded-[42px] -z-10"></div>

            {/* Experience Card */}

            <div className="absolute left-[-30px] top-[70px] bg-white rounded-[32px] px-[38px] py-[34px] shadow-xl z-20">

              <h3 className="text-[90px] leading-none font-black tracking-[-4px]">
                5+
              </h3>

              <p className="text-[24px] font-semibold leading-[1.2] mt-3">
                Years <br />
                Experience
              </p>

            </div>

            {/* Image */}

            <div className="relative overflow-hidden rounded-[42px] max-w-[580px]">

              <Image
                src="/images/deepak.png"
                alt="About Deepak"
                width={620}
                height={760}
                className="w-full h-auto object-cover hover:scale-105 transition duration-700"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="pt-[40px]">

            <p className="text-[28px] md:text-[38px] leading-[1.55] text-[#4a4a4a] font-medium max-w-[760px] tracking-[-1px]">

              I specialize in building premium React, Next.js and headless
              WordPress experiences with clean UI, smooth interactions and
              scalable frontend architecture.

            </p>

            <p className="text-[21px] leading-[1.9] text-[#777] mt-[50px] max-w-[760px]">

              My focus is creating visually impressive and conversion-driven
              digital products that combine elegant design with modern web
              technologies. I love crafting responsive interfaces, animations,
              CMS integrations and high-performance user experiences.

            </p>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-[28px] mt-[70px] max-w-[760px]">

              <div className="bg-white rounded-[32px] px-[38px] py-[34px] shadow-sm border border-[#ececec]">

                <h4 className="text-[70px] font-black leading-none tracking-[-3px]">
                  50+
                </h4>

                <p className="text-[#666] mt-4 text-[19px]">
                  Projects Completed
                </p>

              </div>

              <div className="bg-white rounded-[32px] px-[38px] py-[34px] shadow-sm border border-[#ececec]">

                <h4 className="text-[70px] font-black leading-none tracking-[-3px]">
                  100%
                </h4>

                <p className="text-[#666] mt-4 text-[19px]">
                  Client Satisfaction
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}