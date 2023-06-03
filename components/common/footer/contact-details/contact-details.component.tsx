export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-10 text-center text-base text-white text-opacity-50 md:flex-row md:gap-14 md:text-left xl:gap-52">
      <address className="not-italic first-line:font-bold">
        Designo Central Office
        <br />
        3886 Wellington Street
        <br />
        Toronto, Ontario M9C 3J5
      </address>
      <address className="not-italic first-line:font-bold">
        Contact Us (Central Office)
        <br />
        P : +1 253-863-8967
        <br />M : <a href="mailto:contact@designo.co">contact@designo.co</a>
      </address>
    </div>
  );
}
