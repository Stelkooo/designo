import Image from 'next/image';

import { TSection } from '../constants';

type Props = {
  isInverted?: boolean;
  section: TSection;
};

export default function Section({ isInverted = false, section }: Props) {
  return (
    <article className="bg-lighter-peach md:mx-auto md:max-w-2xl md:overflow-hidden md:rounded-2xl xl:max-w-6xl">
      <div
        className={`xl:flex ${
          isInverted ? 'xl:flex-row-reverse' : 'xl:flex-row'
        }`}
      >
        <picture>
          <source srcSet={section.images.desktop} media="(min-width: 1280px)" />
          <source srcSet={section.images.tablet} media="(min-width: 768px)" />
          <Image
            src={section.images.mobile}
            alt="People gathered around a table with phones, tablets, and laptops discussing"
            className="h-[320px] w-full object-cover xl:h-[640px] xl:min-w-[476px]"
            height={640}
            width={689}
          />
        </picture>
        <div className="h-[545px] bg-[url('/assets/shared/desktop/bg-pattern-three-circles.svg')] bg-about-section px-6 text-center md:h-[416px] md:bg-about-tablet-section md:bg-no-repeat md:py-16 xl:h-[640px] xl:bg-about-desktop-section xl:pl-24 xl:pr-20 xl:text-left">
          <div className="mx-auto grid h-full max-w-xs content-center gap-y-6 md:max-w-xl md:gap-y-8">
            <h2 className="text-[2rem] text-peach md:text-[40px]">
              {section.title}
            </h2>
            {section.description.map((item, index) => (
              <p
                className="text-[15px]/[25px] text-black md:text-base"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
