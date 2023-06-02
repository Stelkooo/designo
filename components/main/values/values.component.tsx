import { getValues } from '@/sanity/lib/client';
import urlForImage from '@/sanity/lib/image';
import Image from 'next/image';

export default async function Values() {
  const [values] = await Promise.all([getValues()]);
  return (
    <section>
      <div className="mx-auto flex max-w-xs flex-col gap-20 md:max-w-2xl xl:max-w-6xl xl:flex-row xl:gap-8">
        {values.map((value) => (
          <article
            key={value._id}
            className="relative flex flex-col items-center gap-12 before:absolute before:inset-0 before:left-1/2 before:h-[202px] before:w-[202px] before:-translate-x-1/2 before:bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] md:flex-row md:before:left-0 md:before:-translate-x-0 xl:flex-col xl:before:left-1/2 xl:before:-translate-x-1/2 [&:nth-of-type(2)]:before:-rotate-90 [&:nth-of-type(3)]:before:rotate-90"
          >
            <Image
              src={urlForImage(value.image).url()}
              alt={`Illustration of being ${value.title}`}
              width={202}
              height={202}
              className="relative h-[202px]"
            />
            <div className="flex flex-col gap-8 text-center md:gap-4 md:text-left xl:gap-8 xl:text-center">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
