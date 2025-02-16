import CommentSection from "@/app/Components/commentSection";
import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// Fetch data based on the slug
async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

// Fetch slugs for static generation
export async function generateStaticParams() {
  const query = `*[_type == "blog"] { slug }`;
  const blogs = await client.fetch(query);

  return blogs.map((blog: { slug: { current: string } }) => ({
    slug: blog.slug.current,
  }));
}

// Blog page component
export default async function BlogArticle({
  params: rawParams,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = await rawParams; 
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="mt-8 ml-5">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Hamza - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '1200px'
        }}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border mx-auto"
      />

      <div className="mt-16 prose prose-blue prose-lg pl-10 pr-5 dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
      <CommentSection/>

    </div>
  );
}
