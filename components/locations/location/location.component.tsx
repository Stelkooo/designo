import dynamic from 'next/dynamic';

import { TLocation } from '@/sanity/lib/queries';

import Address from '@/components/common/address/address.component';

const Map = dynamic(() => import('@/components/locations/map/map.component'), {
  ssr: false,
});

type Props = {
  location: TLocation;
  index: number;
};

export default function Location({ location, index }: Props) {
  return (
    <article
      className={`flex flex-col md:gap-6 ${
        index % 2 === 0 ? 'xl:flex-row-reverse' : 'xl:flex-row'
      } xl:gap-8`}
    >
      <Map coords={location.coords} />
      <div className="grid h-[394px] place-content-center gap-y-6 bg-lighter-peach text-center md:h-[326px] md:justify-normal md:overflow-hidden md:rounded-2xl md:px-[75px] md:text-left xl:w-full">
        <h2 className="text-[2rem] text-peach md:text-[40px]">
          {location.title}
        </h2>
        <div className="grid gap-6 text-[15px]/[25px] text-black md:grid-cols-2 md:text-base">
          <Address
            address={location.address}
            city={location.city}
            email={location.email}
            office={location.office}
            telephone={location.telephone}
          />
        </div>
      </div>
    </article>
  );
}
