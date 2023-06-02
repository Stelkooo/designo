'use client';

import { useState } from 'react';

import { useLockedBody } from 'usehooks-ts';

import Hamburger from './hamburger/hamburger.component';
import Close from './close/close.component';
import HamburgerMenu from './hamburger-menu/hamburger-menu.component';

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useLockedBody(isMenuOpen, 'root');
  return (
    <div>
      {isMenuOpen ? (
        <>
          <Close onClickFunc={() => setIsMenuOpen(false)} />
          <HamburgerMenu onClickFunc={() => setIsMenuOpen(false)} />
        </>
      ) : (
        <Hamburger onClickFunc={() => setIsMenuOpen(true)} />
      )}
    </div>
  );
}
