import PropTypes from "prop-types";

function EventCard({ imageSrc, title, description, dateTime, className = "" }) {
  return (
    <div
      className={`event-card bg-white rounded-xl shadow-lg min-w-[70vw] lg:min-w-px flex ${className}`}
    >
      <img src={imageSrc} className={`event-image shrink-0 object-cover`} />
      <div className="px-7 py-4">
        <span className="text-blue-500 text-xs line-clamp-1">{dateTime}</span>
        <h4 className="text-lg font-normal lg:font-extralight mt-2">{title}</h4>
        <p className="text-slate-500 font-thin text-sm mt-4 line-clamp-3 lg:line-clamp-2">
          {description}
        </p>

        <div className="flex justify-start items-center gap-2 text-secondary-dark mt-7">
          <span className="text-sm">Register Now</span>
          <img src="/assets/svgs/ic_arrow_right_filled.svg" className="" />
        </div>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default EventCard;
