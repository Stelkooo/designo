import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

import {
  DesignType,
  DesignTypeLink,
  Navigation,
  Slug,
  Value,
  designTypeLinksQuery,
  designTypeQuery,
  designTypeSlugsQuery,
  navigationQuery,
  valuesQuery,
} from './queries';

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getNavigation(): Promise<Navigation[]> {
  if (client) return (await client.fetch(navigationQuery)) || [];
  return [];
}

export async function getDesignTypeLinks(): Promise<DesignTypeLink[]> {
  if (client) return (await client.fetch(designTypeLinksQuery)) || [];
  return [];
}

export async function getValues(): Promise<Value[]> {
  if (client) return (await client.fetch(valuesQuery)) || [];
  return [];
}

export async function getDesignTypeSlugs(): Promise<Slug[]> {
  if (client) return (await client.fetch(designTypeSlugsQuery)) || [];
  return [];
}

export async function getDesignType(slug: string): Promise<DesignType> {
  if (client)
    return (await client.fetch(designTypeQuery, { slug })) || ({} as any);
  return {} as any;
}

export default client;
