import urlForImage from '@/sanity/lib/image';
import { DesignType } from '@/sanity/lib/queries';

type Props = {
  designType: DesignType;
};

export default function Heading({ designType }: Props) {
  return (
    <header
      className="grid h-[320px] w-full place-content-center bg-peach bg-left-top bg-no-repeat md:mx-auto md:h-[252px] md:max-w-2xl md:rounded-2xl md:bg-left xl:max-w-6xl xl:bg-right"
      style={{
        backgroundImage: `url(${urlForImage(designType.bgPattern).url()})`,
      }}
    >
      <div className="grid max-w-xs gap-y-6 text-center md:max-w-sm">
        <h1>{designType.title}</h1>
        <p className="text-[15px]/[25px] text-white md:text-base">
          {designType.description}
        </p>
      </div>
    </header>
  );
}
