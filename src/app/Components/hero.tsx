import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="hero border-b-2 bg-purple-700 flex flex-col md:flex-row px-6 py-10 md:px-8 md:py-12">
        {/* Text Section */}
        <div className="hero-text w-full md:w-1/2 text-white pt-4 md:pt-6">
          <h2 className="font-semibold text-center md:text-left">Featured Post</h2>
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 pt-4 text-center md:text-left">
            How AI will Change the Future
          </h1>
          <p className="text-base md:text-lg mb-6 leading-relaxed text-center md:text-left">
            The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-white text-green-500 px-6 py-2 rounded shadow hover:bg-gray-100 mt-3">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hero-img w-full md:w-1/2 h-64 md:h-96 mt-6 md:mt-0">
          <Image
            src="/images/ai.jpg"
            alt="Hero"
            height={204}
            width={200}
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
