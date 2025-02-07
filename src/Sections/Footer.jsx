import Button from "../components/Button";

function Footer() {
  return (
    <div className="relative bg-footer-pattern bg-cover bg-black bg-top bg-no-repeat pb-14">
      <img
        src="/assets/svgs/ic_footer_splash.svg"
        className="absolute w-[calc(15%*0.75)] min-w-[65px] -top-4 left-[8%]"
      />
      <p className="text-white text-center text-3xl pt-28">
        Stay updated with KC Overseas
      </p>

      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 px-8 my-16">
        <input
          type="text"
          className="bg-white rounded-md px-5 h-12 w-full max-w-[300px]"
          placeholder="Email ID"
        />

        <div className="relative w-full max-w-[300px]">
          <select
            className="bg-white rounded-md px-5 h-12 w-full appearance-none"
            placeholder="KC"
          >
            <option>I&apos;m Interested in</option>
            <option value="saab">Frontend Development</option>
            <option value="mercedes">Backend Development</option>
            <option value="audi">Fullstack Development</option>
          </select>

          <img
            src="/assets/svgs/ic_arrow_down.svg"
            className="absolute h-2 right-4 top-5"
          />
        </div>

        <Button className="h-12 w-full max-w-[300px] md:w-[150px]">
          Subscribe Now
        </Button>
      </div>
    </div>
  );
}

export default Footer;
