import CommentSection from "@/app/Components/commentSection";
import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";


export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData(slug: string): Promise<fullBlog | null> {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage
    }
  `;
  try {
    const data = await client.fetch(query, { slug });
    return data || null;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}



export default async function BlogArticle({
    params,
  }: {
    params: { slug: string };
  }) {
    const data = await getData(params.slug);

    // Fallback for missing data
    if (!data) {
        return (
            <div className="mt-8 text-center">
                <h1 className="text-3xl font-bold">Blog Not Found</h1>
                <p className="mt-4 text-lg text-gray-600">
                    The requested blog could not be found. Please check the URL or try again later.
                </p>
            </div>
        );
    }

    return (
        <div className="mt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Blog Title */}
            <header>
                <h1>
                    <span className="block text-base text-center text-indigo-500 font-semibold tracking-wide uppercase">
                        Blog
                    </span>
                    <span className="mt-2 block text-4xl text-center leading-10 font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-gray-100">
                        {data.title}
                    </span>
                </h1>
            </header>

            {/* Title Image */}
            {data.titleImage && (
                <div className="mt-8">
                    <Image
                        src={urlFor(data.titleImage).url()}
                        width={800}
                        height={600}
                        alt={data.title || "Blog Title Image"}
                        priority
                        className="rounded-xl shadow-lg border dark:border-gray-700"
                    />
                </div>
            )}

            {/* Blog Content */}
            <article className="mt-12 prose prose-indigo prose-lg dark:prose-invert prose-headings:font-semibold prose-headings:leading-tight prose-p:leading-relaxed prose-a:underline prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-blockquote:font-semibold prose-blockquote:text-indigo-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded-md dark:prose-code:bg-gray-800 dark:prose-code:text-gray-200">
                <PortableText value={data.content} />
            </article>

            {/* Comment Section */}
            <CommentSection blogId={data.currentSlug} />
        </div>
    );
}
