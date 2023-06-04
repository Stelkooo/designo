import Link from 'next/link';
import Image from 'next/image';

import { DesignTypeLink } from '@/sanity/lib/queries';

import IconRightArrow from 'public/assets/shared/desktop/icon-right-arrow.svg';

type Props = {
  item: DesignTypeLink;
};

export default function DesignTypeContent({ item }: Props) {
  return (
    <Link href={`/design/${item.slug}`} className="relative z-20">
      <div className="relative grid h-full place-content-center gap-y-3 text-center uppercase text-white md:gap-y-6">
        <h2>{item.title}</h2>
        <p className="flex items-center justify-center gap-4 text-[15px]/[22px] font-medium tracking-[5px]">
          View Projects <Image src={IconRightArrow} alt="" />
        </p>
      </div>
    </Link>
  );
}
