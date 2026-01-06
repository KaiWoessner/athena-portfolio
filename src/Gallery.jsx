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
    <section className="bg-white my-8 px-8 text-center">
      <div className="relative mx-auto">
        <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-4xl aspect-[4/3] overflow-hidden mx-auto flex items-center justify-center">
          <img
            src={images[index]}
            alt="Performance"
            className="block max-w-full max-h-full object-contain"
          />

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded shadow border-2 border-black cursor-pointer"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded shadow border-2 border-black cursor-pointer"
          >
            ›
          </button>
        </div>
      </div>

    </section>
  );
}

export default Gallery;
