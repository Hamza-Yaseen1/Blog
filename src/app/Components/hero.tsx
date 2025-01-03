import Image from 'next/image';

function Hero() {
    return (
        <>
            <div className="hero border-b-2 bg-purple-700 flex  px-8 py-12">
                {/* Text Section */}
                <div className="hero-text w-1/2 text-white pt-6">
                <h2 className="font-semibold">Featured Post</h2>
                    <h1 className="text-5xl font-semibold mb-4 pt-4">How AI will Change the Future</h1>
                    <p className="text-lg mb-6 leading-relaxed">
                    The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction                    </p>
                    <button className="bg-white text-green-500 px-6 py-2 rounded shadow hover:bg-gray-100 mt-3">
                        Learn More
                    </button>
                </div>

                {/* Image Section */}
                <div className="hero-img h-96 pl-6">
                    <Image
                        src="/images/hero.png"
                        alt="Hero"
                        height={384}
                        width={500}                        className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                </div>
            </div>
        </>
    );
}

export default Hero;
