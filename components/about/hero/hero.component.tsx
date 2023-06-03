import Image from 'next/image';

import ImageAboutHero from 'public/assets/about/mobile/image-about-hero.jpg';

export default function Hero() {
  return (
    <header className="bg-peach md:mx-auto md:max-w-2xl md:overflow-hidden md:rounded-2xl xl:max-w-6xl">
      <div className="xl:flex xl:flex-row-reverse">
        <picture>
          <source
            srcSet="/assets/about/desktop/image-about-hero.jpg"
            media="(min-width: 1280px)"
          />
          <source
            srcSet="/assets/about/tablet/image-about-hero.jpg"
            media="(min-width: 768px)"
          />
          <Image
            src={ImageAboutHero}
            alt="People gathered around a table with phones, tablets, and laptops discussing"
            className="h-[320px] w-full object-cover xl:h-[480px] xl:min-w-[476px]"
          />
        </picture>
        <div className="bg-[url('/assets/about/mobile/bg-pattern-hero-about-mobile.svg')] bg-about px-6 py-20 text-center md:bg-[url('/assets/about/desktop/bg-pattern-hero-about-desktop.svg')] md:bg-about-tablet md:bg-no-repeat md:py-16 xl:bg-about-desktop xl:pl-24 xl:pr-20 xl:text-left">
          <div className="mx-auto grid max-w-xs gap-y-6 md:max-w-xl md:gap-y-8 xl:h-full xl:content-center">
            <h1>About Us</h1>
            <p className="text-[15px]/[25px] text-white md:text-base">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We&apos;ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We&apos;re always looking forward to creating brands,
              products, and digital experiences that connect with our
              clients&apos; audiences.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
