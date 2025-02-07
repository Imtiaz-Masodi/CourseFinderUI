import EventCard from "../components/EventCard";
import "./Events.css";

function Events() {
  const eventsList = [
    {
      imageSrc: "/assets/images/usa.png",
      title: "USA Vertual Addmission Day",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateTime: "Mar 19 · 05:00 PM to 07:30 PM",
      className: "lg:row-span-2",
    },
    {
      imageSrc: "/assets/images/newzealand.png",
      title: "New Zealand Virtual Admissions Week",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
      dateTime: "May 18 - May 21  · 04:30 PM to 06:30 PM",
    },
    {
      imageSrc: "/assets/images/uk.png",
      title: "UK Virtual Admissions Week",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
      dateTime: "May 24 - May 28  · 04:00 PM to 06:00 PM",
    },
  ];

  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-semibold">Webinars & Events</h2>

      <div className="grid grid-rows-1 grid-flow-col lg:grid-rows-2 lg:grid-flow-col gap-6 max-w-screen-lg px-8 mx-auto py-10 overflow-x-auto events-container">
        {eventsList.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 text-secondary-dark">
        <span className="text-base">See More</span>
        <img src="/assets/svgs/ic_arrow_right_filled.svg" className="" />
      </div>
    </div>
  );
}

export default Events;
