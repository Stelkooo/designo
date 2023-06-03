import { getDesignType, getDesigns } from '@/sanity/lib/client';

import Heading from '@/components/design/heading/heading.component';
import DesignCard from '@/components/design/design-card/design-card.component';
import DesignTypeNav from '@/components/common/design-type-nav/design-type-nav.component';

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const designType = await getDesignType(slug);
  const designs = await getDesigns(designType._id);
  return (
    <main className="grid gap-y-24 pb-24 md:gap-y-[120px] md:pb-[120px] xl:gap-y-40 xl:pb-40">
      <Heading designType={designType} />
      <section className="mx-auto grid max-w-xs gap-y-10 md:max-w-2xl xl:max-w-6xl xl:grid-cols-3 xl:gap-8">
        {designs.map((item) => (
          <DesignCard design={item} key={item._id} />
        ))}
      </section>
      <DesignTypeNav slug={slug} />
    </main>
  );
}
