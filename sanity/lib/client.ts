import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

import { Navigation, navigationQuery } from './queries';

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

export default client;
