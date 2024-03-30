const FeatureItem = ({ feature }) => {
  const { img, title } = feature;
  return (
    <div
      className=" border border-red-200 p-5 space-y-4 shadow-lg rounded-lg 
      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
     hover:bg-[#FF3811] hover:text-gray-50 duration-300 hover:rotate-6 hover:skew-y-3 "
    >
      <div className="flex items-center justify-center">
        <img src={img} className="" alt="" />
      </div>
      <p className="text-center font-semibold text-sm">{title}</p>
    </div>
  );
};

export default FeatureItem;
