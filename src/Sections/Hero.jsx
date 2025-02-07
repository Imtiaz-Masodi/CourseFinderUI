import BreadCrumb from "../components/BreadCrumb";
import Button from "../components/Button";
import Header from "../components/Header";

function Hero() {
  return (
    <div className="w-screen relative min-h-[60vh] bg-hero-pattern bg-primary bg-contain bg-bottom bg-no-repeat pb-16">
      <div className="container relative flex flex-col items-center mx-auto">
        <Header />
        <BreadCrumb />
        <HeroBgSplash />

        <div className="relative flex flex-col justify-center items-center mt-6 lg:mt-4 text-white text-center text-2xl md:text-4xl font-semibold">
          <span>KC Overseas Education</span>
          <span className="z-10">Pune</span>
          <span className="hidden lg:block absolute w-36 h-6 bg-[#805eff] -bottom-2"></span>
        </div>

        <div className="text-center text-white mt-8 px-4 max-w-screen-md leading-7">
          We value your career aspirations, which is why we map your preferences
          with the best that our global universities have to offer. Thousands of
          our students are pursuing their programs and aspirations in eminent
          universities globally and we welcome you to pursue yours!
        </div>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-7 mt-8">
          <Button className="px-12 py-3">Enquire Now</Button>

          <div className="flex justify-center items-center gap-2.5">
            <span className="w-12 aspect-square rounded-full bg-white flex justify-center items-center">
              <img src="/assets/svgs/ic_arrow_down.svg" alt="Arrow Down" />
            </span>
            <span className="text-white">Branch Address</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroBgSplash() {
  return (
    <>
      <img
        src="/assets/svgs/ic_star.svg"
        className="hidden lg:block absolute top-[40%] left-[15%] w-5 aspect-square"
        alt="Star"
      />

      <img
        src="/assets/svgs/ic_ellipse.svg"
        className="hidden lg:block absolute top-[25%] left-[35%] w-1.5 aspect-square"
        alt="Ellipse"
      />

      <img
        src="/assets/svgs/ic_ellipse.svg"
        className="hidden lg:block absolute top-[90%] left-[25%] w-1.5 aspect-square"
        alt="Ellipse"
      />

      <img
        src="/assets/svgs/ic_ellipse_hallow.svg"
        className="hidden lg:block absolute top-[23%] left-[65%] w-3 aspect-square"
        alt="Ellipse"
      />

      <img
        src="/assets/svgs/ic_star.svg"
        className="hidden lg:block absolute top-[30%] left-[80%] w-[18px] aspect-square"
        alt="Ellipse"
      />

      <img
        src="/assets/svgs/ic_star.svg"
        className="hidden lg:block absolute top-[95%] left-[75%] w-3 aspect-square opacity-50"
        alt="Star"
      />
    </>
  );
}

export default Hero;
