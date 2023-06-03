import Image from 'next/image';
import { locations } from './constants';
import Button from '../button/button.component';

export default function Locations() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-12 md:gap-20 xl:w-full xl:max-w-6xl xl:flex-row xl:justify-around">
        {locations.map((location) => (
          <article
            key={location.title}
            className="relative flex flex-col items-center gap-10 before:absolute before:inset-0 before:left-1/2 before:h-[202px] before:w-[202px] before:-translate-x-1/2 before:rotate-90 before:bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] md:gap-12 [&:nth-of-type(2)]:before:rotate-0 [&:nth-of-type(3)]:before:-rotate-90"
          >
            <Image
              src={location.image}
              alt={`Illustration of ${location.title}`}
              height={202}
              width={202}
            />
            <div className="flex flex-col items-center gap-8">
              <h3>{location.title}</h3>
              <Button to={`locations#${location.slug}`}>See Location</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
