'use client';

import Link from 'next/link';

import ReactDom from 'react-dom';

type Props = {
  onClickFunc: () => void;
};

export default function HamburgerMenu({ onClickFunc }: Props) {
  const portalId = document.getElementById('portal');

  if (portalId)
    return ReactDom.createPortal(
      <>
        <div className="fixed left-0 top-[91px] z-50 h-min w-full bg-black px-6 py-12">
          <nav>
            <ul className="flex flex-col gap-8 text-[24px]/[25px] uppercase tracking-[2px] text-white">
              <li>
                <Link href="about" onClick={onClickFunc}>
                  Our Company
                </Link>
              </li>
              <li>
                <Link href="locations" onClick={onClickFunc}>
                  Locations
                </Link>
              </li>
              <li>
                <Link href="contact" onClick={onClickFunc}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="h-screen w-full bg-black bg-opacity-50" />
      </>,
      portalId
    );
  return null;
}
