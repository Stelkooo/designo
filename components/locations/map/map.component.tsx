'use client';

import dynamic from 'next/dynamic';

import { Icon } from 'leaflet';

import { Coords } from '@/sanity/lib/queries';

const LazyMapContainer = dynamic(
  async () => (await import('react-leaflet')).MapContainer,
  { ssr: false }
);
const LazyTileLayer = dynamic(
  async () => (await import('react-leaflet')).TileLayer,
  { ssr: false }
);
const LazyMarker = dynamic(async () => (await import('react-leaflet')).Marker, {
  ssr: false,
});

type Props = {
  coords: Coords;
};

export default function Map({ coords }: Props) {
  const customMarker = new Icon({
    iconUrl: '/assets/marker-icon.png',
    shadowUrl: '/assets/marker-shadow.png',
  });
  return (
    <LazyMapContainer
      center={[coords.lat, coords.lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="z-10 h-[320px] w-full md:rounded-2xl xl:min-w-[350px] xl:max-w-[350px]"
    >
      <LazyTileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LazyMarker position={[coords.lat, coords.lng]} icon={customMarker} />
    </LazyMapContainer>
  );
}
