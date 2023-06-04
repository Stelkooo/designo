import Image from 'next/image';

import ImageHeroPhone from 'public/assets/home/desktop/image-hero-phone.png';

import Button from '@/components/common/button/button.component';

export default function Hero() {
  return (
    <article className="h-[843px] xl:h-[640px]">
      <div className="main-hero relative h-full overflow-hidden bg-peach md:mx-auto md:max-w-2xl md:rounded-2xl xl:flex xl:max-w-6xl xl:flex-col xl:items-start">
        <div className="relative z-10 mx-auto my-auto grid max-w-xs justify-items-center gap-y-6 pt-20 text-center md:max-w-xl md:pt-[60px] xl:mx-0 xl:ml-24 xl:justify-items-start xl:gap-y-10 xl:pt-0 xl:text-left">
          <div className="grid justify-items-center gap-y-6 md:gap-y-8 xl:justify-items-start xl:gap-y-[34px]">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p className="text-[15px]/[25px] text-white md:max-w-[445px] md:text-base">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
          </div>
          <Button onDark to="about">
            Learn More
          </Button>
        </div>
        <Image
          src={ImageHeroPhone}
          alt=""
          className="absolute left-1/2 top-[300px] max-w-[618px] -translate-x-1/2 md:top-[288px] xl:-top-6 xl:left-1/2 xl:-translate-x-0"
        />
      </div>
    </article>
  );
}
