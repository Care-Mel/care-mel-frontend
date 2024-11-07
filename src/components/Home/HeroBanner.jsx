import herobanner from "./../../assets/image/home/herobanner.jpg";

const HeroBanner = () => {
  return (
    <div className="contaier px-10 mx-auto h-[80vh] mx-auto">
      <div className="flex h-full items-center">
        <div className="w-1/2">
          <div className="">
            <img src={herobanner} alt="Hero Banner" className="shadow-sm" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="ml-5">
            <h2 className="header-text font-bold">
              Look For Daycare Services?
            </h2>
            <p className="header-text font-bold mt-2">Call us straight away!</p>
            <button className="mt-4 bg-green-500 body-text font-semibold text-white py-2 px-4 rounded-xl hover:bg-green-500">
              Find Your Caregiver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
