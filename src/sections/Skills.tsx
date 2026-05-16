import Image from "next/image";

const skills = [
  {
    name: "WordPress",
    percent: "95%",
    image: "/images/wordpress.png",
  },
  {
    name: "React",
    percent: "90%",
    image: "/images/wordpress.png",
  },
  {
    name: "Next JS",
    percent: "88%",
    image: "/images/wordpress.png",
  },
  {
    name: "Tailwind",
    percent: "92%",
    image: "/images/wordpress.png",
  },
  {
    name: "UI UX",
    percent: "85%",
    image: "/images/wordpress.png",
  },
  {
    name: "Headless CMS",
    percent: "90%",
    image: "/images/wordpress.png",
  },
];

export default function Skills() {
  return (
    <section className="relative py-28 lg:py-40 mt-32 lg:mt-44 overflow-hidden bg-[#f5f5f3]">

      {/* Gradient Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#ff6b00]/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#111]/5 blur-[140px] rounded-full"></div>

      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading */}

        <div className="mb-16 lg:mb-20">

          <p className="text-[#ff6b00] text-xl md:text-2xl mb-5 font-medium">
            Expertise
          </p>

          <h2 className="text-black text-[42px] md:text-[72px] lg:text-[95px] font-black tracking-[-5px] leading-[0.9]">
            Skills & Technologies
          </h2>

        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-10">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="group border border-[#dfdfdf] rounded-[35px] lg:rounded-[40px] p-6 md:p-8 lg:p-10 bg-white/70 backdrop-blur-xl hover:bg-white transition-all duration-500 hover:-translate-y-3 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >

              {/* Icon */}

              <div className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] rounded-full bg-[#f7f7f7] flex items-center justify-center mx-auto relative overflow-hidden">

                {/* Hover Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={65}
                  height={65}
                  className="relative z-10 object-contain"
                />

              </div>

              {/* Percentage */}

              <h3 className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-black mt-8 lg:mt-10 tracking-[-2px]">
                {skill.percent}
              </h3>

              {/* Skill Name */}

              <p className="text-[#555] uppercase tracking-[2px] text-center mt-3 lg:mt-4 text-xs md:text-sm">
                {skill.name}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}