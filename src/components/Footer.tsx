export default function Contact() {
  return (
    <section className="relative bg-black text-white overflow-hidden pt-24 lg:pt-32">

      {/* Marquee */}

      <div className="border-y border-[#1f1f1f] py-6 overflow-hidden">

        <div className="flex whitespace-nowrap animate-marquee">

          {[...Array(8)].map((_, index) => (

            <div
              key={index}
              className="flex items-center text-[38px] font-black tracking-[-1px] mr-20"
            >

              <span className="text-white">(704) 555-0127</span>

              <span className="mx-8 text-[#555]">—</span>

              <span className="text-transparent stroke-text">
                deepak@gmail.com
              </span>

              <span className="mx-8 text-[#555]">—</span>

            </div>

          ))}

        </div>

      </div>

      {/* Main */}

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-24 lg:py-32">

        <div className="grid lg:grid-cols-[1.1fr_0.8fr] gap-20">

          {/* Left */}

          <div>

            <h2 className="text-[72px] md:text-[100px] lg:text-[120px] font-black tracking-[-6px] leading-[0.9] mb-10">
              Let’s
              <br />
              Contact!
            </h2>

            <p className="text-[#777] text-lg leading-[1.8] max-w-[620px] mb-16">
              I’m always open to discussing new projects, premium frontend
              experiences, UI/UX ideas and creative opportunities. Feel free
              to reach out anytime.
            </p>

            {/* Form */}

            <form className="space-y-10">

              <div className="grid md:grid-cols-2 gap-10">

                <div>

                  <label className="block text-sm mb-4 text-white">
                    First Name
                  </label>

                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#222] pb-4 outline-none text-white placeholder:text-[#555] focus:border-[#ff6b00] transition"
                  />

                </div>

                <div>

                  <label className="block text-sm mb-4 text-white">
                    Last Name
                  </label>

                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#222] pb-4 outline-none text-white placeholder:text-[#555] focus:border-[#ff6b00] transition"
                  />

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-10">

                <div>

                  <label className="block text-sm mb-4 text-white">
                    Email*
                  </label>

                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#222] pb-4 outline-none text-white placeholder:text-[#555] focus:border-[#ff6b00] transition"
                  />

                </div>

                <div>

                  <label className="block text-sm mb-4 text-white">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#222] pb-4 outline-none text-white placeholder:text-[#555] focus:border-[#ff6b00] transition"
                  />

                </div>

              </div>

              <div>

                <label className="block text-sm mb-4 text-white">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full bg-transparent border-b border-[#222] pb-4 outline-none text-white placeholder:text-[#555] resize-none focus:border-[#ff6b00] transition"
                ></textarea>

              </div>

              <button className="bg-[#ff6b00] hover:bg-white hover:text-black transition duration-300 px-10 py-5 text-lg font-semibold">

                Let’s Talk ↗

              </button>

            </form>

          </div>

          {/* Right */}

          <div className="flex flex-col justify-between">

            {/* Menu */}

            <div className="space-y-8">

              {[
                "Home",
                "About Me",
                "Portfolio",
                "Services",
                "Testimonial",
                "Blog",
                "Contact",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between border-b border-[#1c1c1c] pb-6 group cursor-pointer"
                >

                  <h3 className="text-[34px] md:text-[42px] font-black tracking-[-2px] text-[#3f3f3f] group-hover:text-white transition duration-300">

                    {item}

                  </h3>

                  <span className="text-[#444] text-2xl font-bold">

                    0{index + 1}

                  </span>

                </div>

              ))}

            </div>

            {/* Social */}

            <div className="flex gap-5 mt-16">

              {["FB", "IN", "BE", "DR"].map((item, index) => (

                <div
                  key={index}
                  className="w-16 h-16 rounded-full border border-[#222] flex items-center justify-center text-sm hover:bg-[#ff6b00] hover:border-[#ff6b00] transition duration-300 cursor-pointer"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-[#151515]">

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <h3 className="text-3xl font-black tracking-[-2px]">
            Deepak
          </h3>

          <p className="text-[#666] text-sm">
            © 2026 Deepak. All rights reserved.
          </p>

        </div>

      </div>

    </section>
  );
}