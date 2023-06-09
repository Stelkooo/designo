import DesignTypeNav from '@/components/common/design-type-nav/design-type-nav.component';
import Hero from '@/components/main/hero/hero.component';
import Values from '@/components/main/values/values.component';

export default function Home() {
  return (
    <main className="grid gap-y-[120px] pb-[120px] md:pb-[67px] xl:gap-y-[160px] xl:pb-[160px]">
      <Hero />
      <DesignTypeNav />
      <Values />
    </main>
  );
}
