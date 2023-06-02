import Image from 'next/image';

import LogoDark from 'public/assets/shared/desktop/logo-dark.png';

import MobileNav from './mobile-nav/mobile-nav.component';

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between px-6 py-8 md:mx-auto md:max-w-2xl md:px-0 md:py-16 xl:max-w-6xl">
        <Image src={LogoDark} alt="Designo Logo" width={202} height={27} />
        <MobileNav />
      </div>
    </header>
  );
}
