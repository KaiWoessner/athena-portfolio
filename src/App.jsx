import Gallery from "./Gallery";

export default function App() {
  return (
    <div className="font-sans font-bold text-gray-900">
      {/* Hero */}
      <div className="font-sans font-bold text-gray-900">
        {/* Hero */}
        <section className="bg-rose-300 px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Name & Pronouns */}
          <div>
            <h1 className="text-6xl md:text-7xl font-serif leading-tight">Athena<br />Riva</h1>
            <p className="mt-1 text-2xl">she/her</p>
          </div>

          {/* Headshot */}
          <div className="bg-white p-4 shadow-lg max-w-sm md:max-w-md mx-auto">
            <img
              src="/headshot-main.jpg"
              alt="Athena Riva headshot"
              className="w-full h-auto object-cover rounded"
            />
            <p className="text-center mt-1 italic font-serif text-xl">Athena Riva</p>
          </div>
        </section>
      </div>

      {/* Bio */}
      <section className="bg-gray-100 px-8 py-10">
        <p className="max-w-5xl mx-auto text-center text-xl leading-loose">
          Athena Riva is a student at Chicago College of Performing Arts majoring
          in Musical Theatre. She has a passion for storytelling through
          performance with an intention to share a voice that explores
          identity, social justice, and emotional truth.
        </p>
      </section>

      {/* Resume + Headshots */}
      <section>
        <div className="bg-rose-300 px-8 py-6 text-center">
          <h2 className="text-4xl font-bold">Resume and Headshot</h2>
        </div>

        {/* Heashots */}
        <div className="bg-white px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center"
              >
                <img
                  src={`/headshot-${i}.jpg`}
                  alt="Headshot"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels */}
      <section className="bg-white px-8 py-16 space-y-10">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/bqOJXjvVq2I"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/f0APQESwgI4"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Gallery */}
      <section>
        <div className="bg-rose-300 px-8 py-6 text-center">
          <h2 className="text-4xl">Gallery</h2>
        </div>
        <Gallery />
      </section>

      {/* Footer */}
      <footer className="bg-rose-300 text-center py-6">
        <p className="text-3xl">
          Get in touch at{" "}
          <a href="mailto:athenamriva@gmail.com" className="underline">
            athenamriva@gmail.com
          </a>{" "}
          @athena_riva
        </p>
      </footer>
    </div>
  );
}
