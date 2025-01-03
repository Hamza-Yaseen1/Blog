import { TypedObject } from '@portabletext/types';

export interface simpleBlogCard{
    title:string;
    smallDescription:string;
    currentSlug:string;
    titleImage: string;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: TypedObject[]; // Ensure this matches the actual data structure
  titleImage: string;
}
