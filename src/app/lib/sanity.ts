import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
export const client = createClient({
    projectId: "6qyb1m83",
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: false,
})
const builder = ImageUrlBuilder(client)
export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}