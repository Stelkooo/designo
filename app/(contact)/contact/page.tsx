import Locations from '@/components/common/locations/locations.component';
import Contact from '@/components/contact/contact.component';

export default function Page() {
  return (
    <main className="grid gap-y-[120px] pb-[120px] xl:gap-y-[160px] xl:pb-[160px]">
      <Contact />
      <Locations />
    </main>
  );
}
