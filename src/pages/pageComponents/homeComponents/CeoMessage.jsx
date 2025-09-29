export default function CeoMessage() {
  return (
    <div className="bg-gray-300 pt-10 pb-10">
    <section className="relative isolate max-w-6xl mx-auto px-6 py-12 md:py-16 mb-20">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
      </div>

      {/* Card */}
      <div className="relative rounded-md border border-gray-200 bg-white/90 shadow-xl ring-1 ring-gray-100 backdrop-blur-sm">
        {/* Top accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-t-3xl" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10 lg:p-12">
          {/* Left: Message */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-balance">
                CEO’s Message
              </h2>
              <div className="mt-2 h-1 w-16 bg-orange-500 rounded-full" />
            </div>

            <figure className="relative">
              <svg
                aria-hidden="true"
                className="absolute -left-3 -top-4 h-8 w-8 text-orange-400/30"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.17 13H4a1 1 0 0 1-1-1V7a6 6 0 0 1 6-6h1v4H9a2 2 0 0 0-2 2v1h3v5H7.17ZM18.17 13H15a1 1 0 0 1-1-1V7a6 6 0 0 1 6-6h1v4h-1a2 2 0 0 0-2 2v1h3v5h-2.83Z" />
              </svg>

              <blockquote className="text-gray-700 leading-relaxed text-justify md:text-pretty">
                Welcome to our company. We are dedicated to building a future
                where innovation meets excellence. Our team works tirelessly to
                bring you the best products and services that not only meet your
                needs but also exceed expectations.
              </blockquote>
            </figure>

            {/* Signature block */}
            <div className="mt-6 md:mt-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-[2px]">
                  <div className="h-full w-full rounded-full bg-white flex items-center justify-center font-semibold text-orange-600">
                    MK
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mostofa Kamal</p>
                  <p className="text-sm text-gray-600">
                    CEO &amp; Managing Director
                  </p>
                  <p className="text-sm text-gray-600">SEAL Infotech FZ-LLC</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:info@sealinfotech.ae"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  Contact Us
                </a>
                <a
                  href="https://www.optygroup.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  Visit Website
                </a>
              </div>

              {/* Contact info */}
              <div className="mt-6 text-sm text-gray-600">
                <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                    +880-1xxxxxxxxx
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                    info@optygroup.com
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                    www.optygroup.com
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Image frame with subtle gradient ring */}
              <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-br from-orange-500/40 via-amber-400/30 to-yellow-400/40 blur opacity-70" />
              <img
                src="https://ashikapi.netlify.app/assets/Ashik%20Api-DC2-S8J_.jpg"
                alt="Portrait of the CEO"
                className="relative z-10 h-[26rem] w-[20rem] md:h-[28rem] md:w-[22rem] object-cover rounded-[2rem] shadow-2xl ring-1 ring-gray-100"
                loading="lazy"
              />
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-md ring-1 ring-gray-200">
                  Leadership • Innovation • Integrity
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle separator */}
        <div className="px-6 md:px-10 lg:px-12 pb-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </div>
    </section>
    </div>
  );
}
