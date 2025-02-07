function BreadCrumb() {
  return (
    <div className="flex justify-center items-center gap-2 mt-6 lg:mt-20">
      <span className="text-white opacity-50">Home</span>
      <img
        className="opacity-50"
        src="/assets/svgs/ic_ellipse.svg"
        alt="separator"
      />
      <span className="text-white">Pune Branch</span>
    </div>
  );
}

export default BreadCrumb;
