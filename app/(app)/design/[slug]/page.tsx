import type { GetStaticPaths } from 'next';

import { getDesignType, getDesignTypeSlugs } from '@/sanity/lib/client';

import Heading from '@/components/design/heading/heading.component';

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getDesignTypeSlugs();
  const paths = slugs.map(({ slug }) => {
    return {
      params: { slug },
    };
  });
  return { paths, fallback: false };
};

export default async function Design({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const [designType] = await Promise.all([getDesignType(slug)]);
  return (
    <main className="grid gap-y-24 pb-24 md:gap-y-[120px] md:pb-[120px] xl:gap-y-40 xl:pb-40">
      <Heading designType={designType} />
    </main>
  );
}
