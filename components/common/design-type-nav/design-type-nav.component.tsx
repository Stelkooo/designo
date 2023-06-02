import { getDesignTypeLinks } from '@/sanity/lib/client';

import DesignTypePicture from './design-type-picture/design-type-picture.component';
import DesignTypeContent from './design-type-content/design-type-content.component';

export default async function DesignTypeNav() {
  const [designTypeLinks] = await Promise.all([getDesignTypeLinks()]);
  return (
    <nav>
      <div className="mx-auto grid max-w-xs grid-rows-[repeat(3,250px)] gap-y-6 md:max-w-2xl md:grid-rows-[repeat(3,200px)] xl:max-w-6xl xl:grid-cols-2 xl:grid-rows-[repeat(3,308px)] xl:gap-x-8">
        {designTypeLinks.map((item, index) => (
          <div
            style={{
              gridRow: index === 0 ? 'span 2 / span 2' : 'span 1 / span 1',
            }}
            className="relative overflow-hidden rounded-2xl before:absolute before:z-10 before:h-full before:w-full before:bg-black before:opacity-50 before:transition-all hover:before:bg-peach hover:before:opacity-80"
            key={item._id}
          >
            <DesignTypePicture item={item} index={index} />
            <DesignTypeContent item={item} />
          </div>
        ))}
      </div>
    </nav>
  );
}
