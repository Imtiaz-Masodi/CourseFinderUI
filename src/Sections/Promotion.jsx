import PropTypes from "prop-types";
import "./Promotion.css";

function Promotion() {
  const promotionItems = [
    {
      imageSrc: "/assets/images/bg_promotion_1.png",
      title: "Counselling",
      description: "Plan your Academic and Career Goals",
    },
    {
      imageSrc: "/assets/images/bg_promotion_2.png",
      title: "Test Preparation",
      description: "Appear for Standardized Tests",
    },
    {
      imageSrc: "/assets/images/bg_promotion_2.png",
      title: "Test Preparation",
      description: "Appear for Standardized Tests",
    },
  ];

  return (
    <div className="bg-[#DBD9FF]">
      <div className="container relative mx-auto py-16">
        <h3 className="text-3xl font-semibold text-center">
          7 Easy Steps to Land in your Dream University
        </h3>

        <div className="flex mt-10 lg:mt-20 overflow-auto">
          <span className="w-1/3 shrink-0 hidden lg:block"></span>
          {promotionItems.map((item, index) => (
            <CarouselItem key={item.title} index={index + 1} {...item} />
          ))}
        </div>

        <div className="hidden lg:block absolute top-0 right-0 w-40 h-full bg-gradient-to-r from-transparent to-[#DBD9FF]"></div>

        <div className="flex justify-center items-center gap-10 mt-10">
          <div className="flex justify-center items-center gap-2 text-secondary-dark">
            <img
              src="/assets/svgs/ic_arrow_right_filled.svg"
              className="rotate-180"
            />
            <span className="text-base">Previous Step</span>
          </div>
          <div className="flex justify-center items-center gap-2 text-secondary-dark">
            <span className="text-base">Next Step</span>
            <img src="/assets/svgs/ic_arrow_right_filled.svg" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselItem({ index, imageSrc, title, description }) {
  return (
    <div
      className={`promotion-item-container ${index === 1 ? "first-child" : ""}`}
    >
      <div className="flex items-center">
        <span className="grow h-[1px] border border-[#64647A40] border-dashed divider-lines"></span>
        <span className="w-12 aspect-square bg-white rounded-full shadow-lg flex justify-center items-center">
          {index}
        </span>
        <span className="grow h-[1px] border border-[#64647A40] border-dashed divider-lines"></span>
      </div>

      <div className="bg-white rounded-lg shadow-lg h-[200px] lg:h-[250px] w-[270px] lg:w-[440px] px-9 py-6 lg:px-11 flex flex-col items-center grow-0 mx-6 my-8">
        <img src={imageSrc} className="w-20 lg:w-28" />
        <span className="text-xl font-semibold mt-7 text-center">{title}</span>
        <span className="mt-2 text-center">{description}</span>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  index: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Promotion;
