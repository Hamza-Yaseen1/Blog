import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="hero border-b-2 bg-purple-700 flex flex-col md:flex-row px-4 py-8 md:px-8 md:py-12">
      {/* Text Section */}
      <div className="hero-text w-full md:w-1/2 text-white pt-4 md:pt-6">
        <h2 className="font-semibold text-sm md:text-base text-center md:text-left">
          Featured Post
        </h2>
        <h1 className="text-2xl md:text-4xl font-semibold mb-3 pt-3 text-center md:text-left leading-snug">
          How AI will Change the Future
        </h1>
        <p className="text-sm md:text-base mb-5 leading-relaxed text-center md:text-left">
          The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-white text-green-500 px-4 py-2 text-sm rounded shadow hover:bg-gray-100">
            <Link href="/Read">
              Read Blogs
            </Link>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="hero-img w-full md:w-1/2 h-48 md:h-72 mt-6 md:mt-0 overflow-hidden rounded-lg">
        <Image
          src="/images/ai.jpg"
          alt="Hero"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
