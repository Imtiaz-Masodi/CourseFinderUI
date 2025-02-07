import TestimonialCard from "../components/TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      name: "Mandar Suryawanshi",
      address: "Northeastern University, USA",
      message:
        "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    },
    {
      name: "Aarohi Sighel",
      address: "University of South Australia, Australia",
      message:
        "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
      className: "relative lg:top-10",
    },
    {
      name: "Susan Mendonca",
      address: "Conestoga College, Canada",
      message:
        "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    },
  ];
  return (
    <div className="bg-[#ffdcd8]">
      <div className="container max-w-screen-xl mx-auto py-16 relative">
        <h3 className="text-3xl font-semibold text-center">
          Our students love us
        </h3>

        <div className="flex gap-7 my-6 overflow-auto p-10 lg:justify-center">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        <button className="absolute top-[calc(50%-24px)] left-0 w-12 aspect-square rounded-full bg-white shadow-md flex justify-center items-center rotate-90">
          <img src="/assets/svgs/ic_arrow_down.svg" className="opacity-25" />
        </button>

        <button className="absolute top-[calc(50%-24px)] right-0 w-12 aspect-square rounded-full bg-white shadow-md flex justify-center items-center -rotate-90">
          <img src="/assets/svgs/ic_arrow_down.svg" />
        </button>

        <div className="flex gap-4 justify-center mt-12">
          <img
            src="/assets/svgs/ic_ellipse_dark.svg"
            className="w-3 aspect-square"
          />
          <img
            src="/assets/svgs/ic_ellipse_dark.svg"
            className="w-2 aspect-square opacity-25"
          />
          <img
            src="/assets/svgs/ic_ellipse_dark.svg"
            className="w-2 aspect-square opacity-25"
          />
          <img
            src="/assets/svgs/ic_ellipse_dark.svg"
            className="w-2 aspect-square opacity-25"
          />
          <img
            src="/assets/svgs/ic_ellipse_dark.svg"
            className="w-2 aspect-square opacity-25"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
