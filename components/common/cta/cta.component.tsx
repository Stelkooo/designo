import Button from '../button/button.component';

export default function CTA() {
  return (
    <section className="bg-gradient-to-t from-black from-50% to-white to-50% md:from-25% md:to-25%">
      <div className="mx-auto flex max-w-xs flex-col items-center gap-8 overflow-hidden rounded-2xl bg-peach bg-[url('/assets/shared/desktop/bg-pattern-call-to-action.svg')] bg-cta bg-no-repeat px-6 py-16 md:max-w-2xl md:bg-cta-tablet md:py-14 xl:max-w-6xl xl:flex-row xl:justify-between xl:bg-right xl:px-24">
        <div className="flex flex-col items-center gap-4 text-center text-white xl:items-start xl:text-left">
          <h4 className="text-[2rem]/[36px] font-medium md:max-w-xs md:text-[40px]/[40px]">
            Let&apos;s talk about your project
          </h4>
          <p className="text-[15px]/[25px] md:max-w-md md:text-base">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div className="relative">
          <Button to="contact" onDark>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
