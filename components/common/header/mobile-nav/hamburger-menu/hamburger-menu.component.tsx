'use client';

import Link from 'next/link';
import ReactDom from 'react-dom';

import { Navigation } from '@/sanity/lib/queries';

type Props = {
  onClickFunc: () => void;
  navLinks: Navigation[];
};

export default function HamburgerMenu({ onClickFunc, navLinks }: Props) {
  const portalId = document.getElementById('portal');
  if (portalId)
    return ReactDom.createPortal(
      <>
        <div className="fixed left-0 top-[91px] z-50 h-min w-full bg-black px-6 py-12">
          <nav>
            <ul className="flex flex-col gap-8 text-[24px]/[25px] uppercase tracking-[2px] text-white">
              {navLinks.map((item) => (
                <li key={item._id}>
                  <Link href={item.slug} onClick={onClickFunc}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="h-screen w-full bg-black bg-opacity-50" />
      </>,
      portalId
    );
  return null;
}
