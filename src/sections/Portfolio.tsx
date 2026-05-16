"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "WordPress",
  "React",
  "UI/UX",
];

const projects = [
  {
    title: "Modern WordPress Website",
    category: "WordPress",
    image: "/images/project1.jpg",
  },
  {
    title: "React Portfolio",
    category: "React",
    image: "/images/project2.jpg",
  },
  {
    title: "UI UX Dashboard",
    category: "UI/UX",
    image: "/images/project3.jpg",
  },
  {
    title: "Headless CMS",
    category: "WordPress",
    image: "/images/project4.jpg",
  },
];

export default function Portfolio() {

  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section className="bg-black py-24 lg:py-36 overflow-hidden">

      <div className="container-custom">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <div>

            <p className="text-[#ff6b00] uppercase tracking-[4px] text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-white text-[48px] md:text-[72px] lg:text-[96px] font-black leading-[0.9] tracking-[-4px]">
              Latest Projects
            </h2>

          </div>

          {/* Tabs */}

          <div className="flex flex-wrap gap-4">

            {categories.map((item) => (

              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-6 py-3 rounded-full text-sm transition-all duration-300
                  
                  ${
                    active === item
                      ? "bg-[#ff6b00] text-white"
                      : "bg-[#111] text-[#999] hover:bg-[#222]"
                  }
                `}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

        {/* Portfolio Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">

          {filteredProjects.map((project, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] bg-[#111]"
            >

              {/* Image */}

              <div className="relative h-[300px] md:h-[500px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>

              {/* Content */}

              <div className="absolute bottom-0 left-0 p-8 z-10">

                <p className="text-[#ff6b00] uppercase tracking-[3px] text-xs mb-3">
                  {project.category}
                </p>

                <h3 className="text-white text-3xl font-bold leading-tight">
                  {project.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}