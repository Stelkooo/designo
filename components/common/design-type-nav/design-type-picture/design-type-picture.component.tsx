import Image from 'next/image';

import urlForImage from '@/sanity/lib/image';
import { DesignTypeLink } from '@/sanity/lib/queries';

type Props = {
  item: DesignTypeLink;
  index: number;
  slug?: string;
};

export default function DesignTypePicture({
  item,
  index,
  slug = undefined,
}: Props) {
  return (
    <picture>
      <source
        srcSet={
          index === 0 && item.largeImage && slug === undefined
            ? urlForImage(item.largeImage).url()
            : urlForImage(item.images.desktop).url()
        }
        media="(min-width: 1280px)"
      />
      <source
        srcSet={urlForImage(item.images.tablet).url()}
        media="(min-width: 768px)"
      />
      <Image
        src={urlForImage(item.images.mobile).url()}
        alt={item.title}
        fill
      />
    </picture>
  );
}
