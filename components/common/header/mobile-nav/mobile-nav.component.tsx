'use client';

import { useEffect, useState } from 'react';

import { useLockedBody, useMediaQuery } from 'usehooks-ts';

import { Navigation } from '@/sanity/lib/queries';

import Hamburger from './hamburger/hamburger.component';
import Close from './close/close.component';
import HamburgerMenu from './hamburger-menu/hamburger-menu.component';

type Props = {
  navLinks: Navigation[];
};

export default function MobileNav({ navLinks }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // close the menu is screen size is tablet
  // as close button disappears and user will not be able to close menu
  const isTablet = useMediaQuery('(min-width: 768px)');
  useEffect(() => {
    if (isTablet) setIsMenuOpen(false);
  }, [isTablet]);

  // disable scrolling when menu is open
  useLockedBody(isMenuOpen, 'root');
  return (
    <div>
      {isMenuOpen ? (
        <>
          <Close onClickFunc={() => setIsMenuOpen(false)} />
          <HamburgerMenu
            onClickFunc={() => setIsMenuOpen(false)}
            navLinks={navLinks}
          />
        </>
      ) : (
        <Hamburger onClickFunc={() => setIsMenuOpen(true)} />
      )}
    </div>
  );
}
