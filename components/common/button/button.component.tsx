import Link from 'next/link';

type Props = {
  children: string;
  to?: string | null;
  onDark?: boolean;
  isSubmit?: boolean;
};

export default function Button({
  children,
  to = null,
  onDark = false,
  isSubmit = false,
}: Props) {
  const content = (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`w-[152px] rounded-lg py-4 text-[15px]/[22px] font-medium uppercase tracking-[1px] transition-colors ${
        onDark
          ? 'bg-white text-black hover:bg-light-peach hover:text-white'
          : 'bg-peach text-white hover:bg-light-peach'
      }`}
    >
      {children}
    </button>
  );
  return to ? <Link href={`/${to}`}>{content}</Link> : content;
}
