function Updates() {
  return (
    <div className="flex flex-col lg:items-center my-20 max-w-screen-lg mx-auto">
      <h3 className="text-3xl font-semibold text-center">Latest KC Updates</h3>
      <div className="px-5 py-8 flex gap-7 overflow-auto">
        <div className="relative shrink-0 bg-[#FDAF4D] px-7 py-12 rounded-lg shadow-lg w-[300px] lg:w-[580px] h-[500px] flex flex-col justify-between">
          <div>
            <h4 className="text-3xl font-semibold">We&apos;re Hiring!</h4>
            <p className="mt-3 leading-6 max-w-[300px]">
              KC continues recruitments for its offices across India and Asia
              even during the unprecedented times of Covid.
            </p>
          </div>

          <button className="mx-auto lg:ml-0 bg-white rounded-lg shadow-lg text-secondary-dark w-[240px] lg:w-[150px] h-12">
            Apply Now
          </button>

          <img
            src="/assets/images/bg_updates.png"
            className="absolute bottom-0 right-0 "
          />
        </div>

        <div className="shrink-0 px-7 py-12 rounded-lg h-[500px] w-[270px] flex flex-col items-center bg-white shadow-lg">
          <img
            src="/assets/images/logo-airc.png"
            className="w-[120px] aspect-square"
          />

          <span className="text-lg font-normal text-center mt-6">
            American International Recruitment Council
          </span>

          <span className="flex items-center gap-2 mt-4">
            <img
              src="/assets/svgs/ic_star_gray.svg"
              className="w-4 aspect-square"
            />
            <img
              src="/assets/svgs/ic_star_gray.svg"
              className="w-5 aspect-square"
            />
            <img
              src="/assets/svgs/ic_star_gray.svg"
              className="w-4 aspect-square"
            />
          </span>

          <span className="text-center text-xl font-light text-blue-500 mt-10">
            Certified Agents
          </span>

          <span className="text-center text-sm text-slate-500 mt-2.5">
            October 2018 - 2028
          </span>
        </div>

        <div className="shrink-0 px-7 py-12 rounded-lg h-[500px] w-[270px] flex flex-col items-center bg-white shadow-lg">
          <img
            src="/assets/images/logo-british-council.png"
            className="h-[120px]"
          />

          <span className="text-lg font-normal text-center mt-6">
            The British Council
          </span>

          <span className="flex items-center gap-2 mt-4">
            <img
              src="/assets/svgs/ic_star_gray.svg"
              className="w-4 aspect-square"
            />
            <img
              src="/assets/svgs/ic_star_gray.svg"
              className="w-5 aspect-square"
            />
            <img
              src="/assets/svgs/ic_star_gray.svg"
              className="w-4 aspect-square"
            />
          </span>

          <span className="text-center text-xl font-light text-blue-500 mt-10">
            Advanced Agent Certificate
          </span>

          <span className="text-center text-sm text-slate-500 mt-2.5">
            August 2016 - 2018
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 text-secondary-dark mt-10">
        <span className="text-base">More News</span>
        <img src="/assets/svgs/ic_arrow_right_filled.svg" className="" />
      </div>
    </div>
  );
}

export default Updates;
