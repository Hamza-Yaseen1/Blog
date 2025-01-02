import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
export const client = createClient({
    projectId: "6qyb1m83",
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: false,
})
const builder = ImageUrlBuilder(client)
export function urlFor(source:any) {
    return builder.image(source)
}