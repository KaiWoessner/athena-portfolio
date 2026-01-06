import { useState } from "react";

/* Gallery */
function Gallery() {
  const images = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  return (
    <section className="bg-white px-8 py-6 text-center">
      <div className="relative mx-auto">
        <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl flex items-center justify-center bg-white-300 rounded shadow-lg aspect-[4/3] mx-auto">
          <img
            src={images[index]}
            alt="Performance"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded shadow border-2 border-black cursor-pointer"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded shadow border-2 border-black cursor-pointer"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Gallery;
