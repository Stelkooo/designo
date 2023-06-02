import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

import {
  DesignTypeLink,
  Navigation,
  Value,
  designTypeLinksQuery,
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

export default client;
