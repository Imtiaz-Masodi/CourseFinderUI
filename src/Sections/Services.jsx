import PropTypes from "prop-types";
import Button from "../components/Button";

export default function Services() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center mt-16 mb-11">
          Services we provide
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 min-w-full lg:min-w-0 lg:max-w-screen-lg mx-auto">
          <ServiceCard>
            <img src="/assets/svgs/ic_service_1.svg" />
            <span>Test Preparing & Coaching</span>
          </ServiceCard>
          <ServiceCard>
            <img src="/assets/svgs/ic_service_2.svg" />
            <span>Application Assistance</span>
          </ServiceCard>
          <ServiceCard>
            <img src="/assets/svgs/ic_service_3.svg" />
            <span>Education Loans & Fee Payments</span>
          </ServiceCard>
          <ServiceCard>
            <img src="/assets/svgs/ic_service_4.svg" />
            <span>Insurance, Forex & Travel Assistance</span>
          </ServiceCard>
        </div>
        <Button className="mt-10 mx-auto">Enquire Now</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-12 mt-20 px-5 max-w-screen-lg mx-auto mb-40">
        <img
          src="/assets/images/service_image.png"
          className="w-[450px] h-[400px] object-cover object-left rounded-xl shadow-[-30px_-30px_0_0_#FFE7C9]"
        />
        <div>
          <h3 className="text-2xl text-center px-4 lg:px-0">
            Realize your global ambitions with us
          </h3>
          <div className="text-[#0E1B2C] font-light mt-14 lg:mt-4">
            With a keen ear for your choices and preferences, our counselling
            experience is so seamless that you will land in your dream
            university even before you do!
          </div>

          <div className="flex flex-col items-start gap-4 mt-6">
            <AmbitionItem>
              Virtual & In Person Coaching and Counselling
            </AmbitionItem>
            <AmbitionItem>
              Comprehensive Assistance for Applications, Admissions & Visas
            </AmbitionItem>
            <AmbitionItem>High Value Scholarships and Study Loans</AmbitionItem>
          </div>
        </div>
      </div>
    </>
  );
}

function ServiceCard({ children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-6 lg:basis-1/2">
      {children}
    </div>
  );
}

ServiceCard.propTypes = {
  children: PropTypes.node.isRequired,
};

function AmbitionItem({ children }) {
  return (
    <div className="flex justify-center items-center gap-4">
      <img
        src="/assets/svgs/ic_star_filled.svg"
        className="w-[30px] shrink-0 aspect-square bg-white rounded-full shadow-lg p-1.5"
      />
      <span>{children}</span>
    </div>
  );
}

AmbitionItem.propTypes = {
  children: PropTypes.node.isRequired,
};
