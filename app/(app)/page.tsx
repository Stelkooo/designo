import DesignTypeNav from '@/components/common/design-type-nav/design-type-nav.component';
import Hero from '@/components/main/hero/hero.component';
import Values from '@/components/main/values/values.component';

export default function Home() {
  return (
    <main className="grid gap-y-[120px] xl:gap-y-[160px]">
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <DesignTypeNav />
      {/* @ts-expect-error Async Server Component */}
      <Values />
    </main>
  );
}
