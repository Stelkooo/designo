import Form from './form/form';
import Info from './info/info.component';

export default function Contact() {
  return (
    <article className="grid w-full gap-y-12 bg-peach bg-[url('/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')] bg-contact px-6 py-[4.5rem] md:mx-auto md:max-w-2xl md:overflow-hidden md:rounded-2xl md:bg-[url('/assets/contact/desktop/bg-pattern-hero-desktop.svg')] md:bg-contact-tablet md:bg-no-repeat md:px-14 xl:max-w-6xl xl:grid-cols-2 xl:bg-left-bottom xl:px-24 xl:py-12">
      <Info />
      <Form />
    </article>
  );
}
