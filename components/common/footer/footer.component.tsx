import { getNavigation } from '@/sanity/lib/client';

import Nav from '../nav/nav.components';
import Socials from './socials/socials.component';
import ContactDetails from './contact-details/contact-details.component';
import Logo from '../logo/logo.component';

async function Footer() {
  const [navLinks] = await Promise.all([getNavigation()]);
  return (
    <footer className="bg-black py-16 md:py-20 xl:py-[4.5rem]">
      <div className="mx-auto flex max-w-xs flex-col gap-10 md:max-w-2xl md:gap-8 xl:max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:border-b md:border-b-white md:border-opacity-10 md:pb-10">
          <Logo />
          <hr className="h-[1px] w-full border-white border-opacity-10 md:hidden" />
          <Nav navLinks={navLinks} />
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <ContactDetails />
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default Footer as unknown as () => JSX.Element;
