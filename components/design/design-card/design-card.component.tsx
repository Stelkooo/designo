import urlForImage from '@/sanity/lib/image';
import { Design } from '@/sanity/lib/queries';
import Image from 'next/image';

type Props = {
  design: Design;
};

export default function DesignCard({ design }: Props) {
  return (
    <article className="group/design cursor-pointer overflow-hidden rounded-2xl bg-lighter-peach transition-colors hover:bg-peach md:flex xl:flex-col">
      <Image
        src={urlForImage(design.image).url()}
        alt={`Showcase of ${design.title}`}
        width={350}
        height={320}
        className="h-[320px] w-[327px] md:h-[310px] md:w-[339px] xl:h-[320px] xl:w-[350px]"
      />
      <div className="grid gap-y-4 p-8 text-center md:content-center md:gap-y-3">
        <h3 className="text-peach group-hover/design:text-white">
          {design.title}
        </h3>
        <p className="text-black group-hover/design:text-white">
          {design.description}
        </p>
      </div>
    </article>
  );
}
