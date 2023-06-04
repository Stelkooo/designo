import { Navigation } from '@/sanity/lib/queries';
import Link from 'next/link';

type Props = {
  navLinks: Navigation[];
  isDark?: boolean;
};

export default function Nav({ navLinks, isDark = false }: Props) {
  return (
    <nav>
      <ul
        className={`flex flex-col gap-8 text-center text-[14px]/[14px] uppercase tracking-[2px] ${
          isDark ? 'text-black' : 'text-white'
        } md:flex-row md:gap-[42px]`}
      >
        {navLinks.map((item) => (
          <li key={item._id}>
            <Link
              href={`/${item.slug}`}
              className={`${
                isDark ? 'decoration-black' : 'decoration-white'
              } decoration-0 underline-offset-8 transition-all hover:underline hover:decoration-1 hover:underline-offset-2`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
