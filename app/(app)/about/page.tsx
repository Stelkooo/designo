import Hero from '@/components/about/hero/hero.component';
import Section from '@/components/about/section/section.component';

import { sections } from '@/components/about/constants';
import Locations from '@/components/common/locations/locations.component';

export default function Page() {
  return (
    <main className="grid gap-y-[120px] pb-[120px] xl:gap-y-[160px] xl:pb-[160px]">
      <div className="md:grid md:gap-y-[120px] xl:gap-y-[160px]">
        <Hero />
        <Section section={sections[0]} />
      </div>
      <Locations />
      <Section section={sections[1]} isInverted />
    </main>
  );
}
