import Image from 'next/image';

import LogoDark from 'public/assets/shared/desktop/logo-dark.png';

import { getNavigation } from '@/sanity/lib/client';

import MobileNav from './mobile-nav/mobile-nav.component';
import Nav from '../nav/nav.components';

export default async function Header() {
  const [navLinks] = await Promise.all([getNavigation()]);
  return (
    <header>
      <div className="flex items-center justify-between px-6 py-8 md:mx-auto md:max-w-2xl md:px-0 md:py-16 xl:max-w-6xl">
        <Image src={LogoDark} alt="Designo Logo" width={202} height={27} />
        <div className="md:hidden">
          <MobileNav navLinks={navLinks} />
        </div>
        <div className="hidden md:block">
          <Nav navLinks={navLinks} isDark />
        </div>
      </div>
    </header>
  );
}
