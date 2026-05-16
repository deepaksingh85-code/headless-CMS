"use client";

import { useState } from "react";

const services = [
  {
    title: "Visual Design",
    content: [
      "Premium UI/UX interfaces",
      "Modern visual systems",
      "Clean responsive layouts",
    ],
  },
  {
    title: "Product Strategy",
    content: [
      "Headless WordPress Architecture",
      "React & Next.js Development",
      "Performance Optimization",
    ],
  },
  {
    title: "Frontend Development",
    content: [
      "React JS Development",
      "Next.js Applications",
      "Interactive Animations",
    ],
  },
  {
    title: "UI/UX Design",
    content: [
      "Figma Design Systems",
      "Wireframes & Prototypes",
      "User Experience Research",
    ],
  },
];

export default function Services() {

  const [active, setActive] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative py-128 lg:py-40 bg-[#f5f5f3] overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}

        <div className="mb-20">

          <p className="text-[#ff6b00] uppercase tracking-[4px] text-sm mb-5">
            Services
          </p>

          <div className="flex items-center gap-5 mb-8">

            <div className="w-24 h-[1px] bg-black"></div>

            <div className="w-4 h-4 rounded-full bg-black"></div>

          </div>

          <h2 className="text-[30px] md:text-[40px] lg:text-[110px] font-black tracking-[-5px] leading-none">
            What I Do
          </h2>

        </div>

        {/* Accordion */}

        <div className="border-t border-[#dcdcdc]">

          {services.map((service, index) => (

            <div
              key={index}
              className="border-b border-[#dcdcdc]"
            >

              {/* Header */}

              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between gap-6 py-10 text-left group"
              >

                <h3 className="text-[34px] md:text-[40px] lg:text-[46px] font-black tracking-[-3px] leading-none group-hover:text-[#ff6b00] transition duration-300">

                  {service.title}

                </h3>

                {/* Arrow */}

                <div
                  className={`min-w-[85px] h-[85px] rounded-full bg-black text-white flex items-center justify-center text-3xl transition-all duration-500
                  
                  ${
                    active === index
                      ? "rotate-45 bg-[#ff6b00]"
                      : "rotate-0"
                  }`}
                >

                  ↗

                </div>

              </button>

              {/* Content */}

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
                ${
                  active === index
                    ? "max-h-[400px] pb-10"
                    : "max-h-0"
                }`}
              >

                <div className="pl-2 md:pl-4">

                  <div className="space-y-5 text-[#555] text-xl leading-[1.8]">

                    {service.content.map((item, i) => (

                      <p key={i}>
                        + {item}
                      </p>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}