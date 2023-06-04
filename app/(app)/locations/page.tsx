import 'leaflet/dist/leaflet.css';

import { getLocations } from '@/sanity/lib/client';
import Location from '@/components/locations/location/location.component';

export default async function Page() {
  const locations = await getLocations();
  return (
    <main className="mx-auto grid gap-y-10 pb-[120px] md:max-w-2xl md:gap-y-[120px] xl:max-w-6xl xl:gap-y-8">
      {locations.map((location, index) => (
        <Location index={index} location={location} key={location._id} />
      ))}
    </main>
  );
}
