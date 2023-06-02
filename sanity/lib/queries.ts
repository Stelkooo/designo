import { groq } from 'next-sanity';

export const navigationQuery = groq`
  *[_type == "navigation"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
  }
`;

export type Navigation = {
  _id: string;
  title: string;
  slug: string;
};

export const designTypeLinksQuery = groq`
  *[_type == "designType"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    images,
    largeImage,
  }
`;

export type DesignTypeLink = {
  _id: string;
  title: string;
  slug: string;
  images: Images;
  largeImage?: Image;
};

export type Image = {
  _type: 'image';
  asset: Reference;
};

type Images = {
  mobile: Image;
  tablet: Image;
  desktop: Image;
};

type Reference = {
  _ref: string;
  _type: 'reference';
};
