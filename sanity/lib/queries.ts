/* eslint-disable import/prefer-default-export */
import { groq } from 'next-sanity';

export const navigationQuery = groq`
    _id,
    title,
    "slug": slug.current,
`;

export type Navigation = {
  _id: string;
  title: string;
  slug: string;
};
