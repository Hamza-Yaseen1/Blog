import { client } from "@/sanity/lib/client";
import { simpleBlogCard } from "./lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Hero from "./Components/hero";
import Link from "next/link";
async function getData() {
  const query = `
    *[_type=='blog'] | order(_createdAt asc) {
      title,
      smallDescription,
      'currentSlug': slug.current,
      titleImage
    }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
    <Hero/>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-6">Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.reverse().slice(0, 3).map((post, index) => (
            <Card key={index} className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <Link                   href={`/blog/${post.currentSlug}`}              >
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{post.smallDescription}</p>
                <a
                  href={`/blog/${post.currentSlug}`}
                  className="text-blue-600 text-sm font-medium hover:underline mt-4 block"
                >
                  Read More →
                </a>
              </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </main>
      <div className="more-blog flex justify-center pb-10">
      <Link href="/Read" passHref>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 md:px-16 lg:px-24 xl:px-32 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          Read More Blogs
        </button>
      </Link>
    </div>
    </>
  );
}
