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

export const valuesQuery = groq`
  *[_type == "value"] | order(_createdAt asc) {
    _id,
    title,
    description,
    image,
  }
`;

export type Value = {
  _id: string;
  title: string;
  description: string;
  image: Image;
};

export const designTypeSlugsQuery = groq`
  *[_type == "designType"] | order(_createdAt asc) {
    "slug": slug.current,
  }
`;

export type Slug = {
  slug: string;
};

export const designTypeQuery = groq`
  *[_type=="designType" && slug.current==$slug][0] {
    _id,
    title,
    description,
    bgPattern,
  }
`;

export type DesignType = {
  _id: string;
  title: string;
  description: string;
  bgPattern: Image;
};

export const designsQuery = groq`
 *[_type == "design" && type._ref==$ref] | order(_createdAt asc) {
    _id,
    title,
    description,
    image
  }
`;

export type Design = {
  _id: string;
  title: string;
  description: string;
  image: Image;
};

export const locationsQuery = groq`
  *[_type == "location"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    office,
    address,
    city,
    telephone,
    email,
    coords,
  }
`;

export type TLocation = {
  _id: string;
  title: string;
  slug: string;
  office: string;
  address: string;
  city: string;
  telephone: string;
  email: string;
  coords: Coords;
};

export type Coords = {
  lat: number;
  lng: number;
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
