import PropTypes from "prop-types";

function TestimonialCard({ name, address, message, className }) {
  return (
    <div
      className={`bg-white shrink-0 rounded-lg shadow-lg p-8 w-[280px] lg:w-[370px] flex flex-col justify-between ${className}`}
    >
      <div>
        <img src="/assets/svgs/ic_double_quote.svg" className="h-5" />
        <div className="mt-5 font-light">{message}</div>
      </div>
      <div>
        <div className="mt-5 font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{address}</div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  message: PropTypes.string,
  className: PropTypes.string,
};

export default TestimonialCard;
