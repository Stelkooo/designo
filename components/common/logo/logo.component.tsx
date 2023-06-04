import Image from 'next/image';
import Link from 'next/link';

import LogoDark from 'public/assets/shared/desktop/logo-dark.png';
import LogoLight from 'public/assets/shared/desktop/logo-light.png';

type Props = {
  isDark?: boolean;
};

export default function Logo({ isDark = false }: Props) {
  return (
    <Link href="/">
      <Image
        src={isDark ? LogoDark : LogoLight}
        alt="Designo Logo"
        width={202}
        height={27}
      />
    </Link>
  );
}
