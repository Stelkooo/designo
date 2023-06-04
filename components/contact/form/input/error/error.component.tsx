import Image from 'next/image';

import IconError from 'public/assets/contact/desktop/icon-error.svg';

type Props = { message: string };

export default function Error({ message }: Props) {
  return (
    <span className="absolute right-0 top-0 inline-flex items-center gap-2 p-3 text-[12px]/[26px] italic text-white">
      {message} <Image src={IconError} alt="" />
    </span>
  );
}
