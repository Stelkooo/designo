import { getDesignTypeLinks } from '@/sanity/lib/client';

import DesignTypePicture from './design-type-picture/design-type-picture.component';
import DesignTypeContent from './design-type-content/design-type-content.component';

type Props = {
  slug?: string;
};

async function DesignTypeNav({ slug = undefined }: Props) {
  const [designTypeLinks] = await Promise.all([getDesignTypeLinks()]);
  return (
    <nav>
      <div
        className={`mx-auto grid max-w-xs gap-y-6 md:max-w-2xl xl:max-w-6xl xl:grid-cols-2 xl:gap-x-8 ${
          slug === undefined
            ? 'grid-rows-[repeat(3,250px)] md:grid-rows-[repeat(3,200px)] xl:grid-rows-[repeat(2,308px)]'
            : 'grid-rows-[repeat(2,250px)] md:grid-rows-[repeat(2,200px)] xl:grid-rows-[308px]'
        }`}
      >
        {designTypeLinks.map((item, index) =>
          item.slug !== slug ? (
            <div
              className={`relative overflow-hidden rounded-2xl before:absolute before:z-10 before:h-full before:w-full before:bg-black before:opacity-50 before:transition-all hover:before:bg-peach hover:before:opacity-80 ${
                index === 0 && slug === undefined
                  ? 'row-span-1 xl:row-span-2'
                  : 'row-span-1'
              }`}
              key={item._id}
            >
              <DesignTypePicture item={item} index={index} slug={slug} />
              <DesignTypeContent item={item} />
            </div>
          ) : null
        )}
      </div>
    </nav>
  );
}

export default DesignTypeNav as unknown as ({ slug }: Props) => JSX.Element;
