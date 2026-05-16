import Image from "next/image";

const blogs = [
  {
    title: "The Importance of User Centered Design in Startups",
    date: "22",
    month: "Dec",
  },
  {
    title: "How to Conduct Effective User Research",
    date: "22",
    month: "Dec",
    image: "/images/blog.jpg",
  },
  {
    title: "The Role of Prototyping in Product Development",
    date: "22",
    month: "Dec",
  },
  {
    title: "The Power of Visual Storytelling in UI Design",
    date: "22",
    month: "Dec",
  },
];

export default function Blog() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#f5f5f3] overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Top */}

        <div className="flex items-start justify-between mb-20">

          <div>

            <p className="text-[#ff6b00] uppercase tracking-[4px] text-sm mb-5">
              Blog
            </p>

            <div className="flex items-center gap-5 mb-8">

              <div className="w-24 h-[1px] bg-black"></div>

              <div className="w-4 h-4 rounded-full bg-black"></div>

            </div>

            <h2 className="text-[52px] md:text-[82px] lg:text-[110px] font-black tracking-[-5px] leading-none">
              Latest Blog
            </h2>

          </div>

          {/* Decorative */}

          <div className="hidden lg:block text-[80px] rotate-12 opacity-20">
            〰
          </div>

        </div>

        {/* Blog List */}

        <div className="border-t border-[#dcdcdc]">

          {blogs.map((blog, index) => (

            <div
              key={index}
              className="py-10 border-b border-[#dcdcdc] group"
            >

              <div className="grid lg:grid-cols-[1fr_120px] gap-8 items-start">

                {/* Left */}

                <div>

                  <h3 className="text-[28px] md:text-[42px] lg:text-[52px] font-black tracking-[-2px] leading-[1.1] max-w-[900px] group-hover:text-[#ff6b00] transition duration-300 cursor-pointer">

                    {blog.title}

                  </h3>

                  {/* Featured Image */}

                  {blog.image && (

                    <div className="relative mt-10 overflow-hidden rounded-[30px]">

                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1200}
                        height={700}
                        className="w-full h-[260px] md:h-[420px] object-cover group-hover:scale-105 transition duration-700"
                      />

                      {/* View Button */}

                      <div className="absolute inset-0 flex items-center justify-center">

                        <button className="w-28 h-28 rounded-full bg-black text-white text-lg font-medium hover:bg-[#ff6b00] transition duration-300">

                          View ↗

                        </button>

                      </div>

                    </div>

                  )}

                </div>

                {/* Date */}

                <div className="flex lg:justify-end">

                  <div className="w-[90px] h-[90px] border border-[#dcdcdc] flex flex-col items-center justify-center rounded-xl">

                    <span className="text-3xl font-black leading-none">
                      {blog.date}/
                    </span>

                    <span className="text-sm uppercase tracking-[2px] text-[#555] mt-1">
                      {blog.month}
                    </span>

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