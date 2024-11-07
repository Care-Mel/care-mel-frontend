// Collaborate.js
import logo1 from "./../../assets/image/home/logo1.png";
import logo2 from "./../../assets/image/home/logo2.png";
import logo3 from "./../../assets/image/home/logo3.png";
import logo4 from "./../../assets/image/home/logo4.png";

const Collaborate = () => {
  const partners = [
    { name: "Oelly Suppylemnt", logo: logo1 }, // Replace with actual logo URL
    {
      name: "Jordan Elder-Care Community",
      logo: logo2,
    }, // Replace with actual logo URL
    { name: "Mega Wecare", logo: logo3 }, // Replace with actual logo URL
    { name: "Kelly Care", logo: logo4 }, // Replace with actual logo URL
  ];

  return (
    <div className="container mx-auto px-10 py-4 sm:py-6 md:py-8 mt-1 sm:mt-2 md:mt-5">
      <div className="mb-10 flex flex-col md:flex-row justify-around bg-green-600 text-white rounded-lg p-4 shadow-lg px-10 py-10">
        <div className=" mb-4 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-bold">Active Caregivers</h3>
          <p className="header-text mt-2 font-bold">56 Caregivers</p>
        </div>
        <div className="text-center mb-4 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-bold">Years of Service</h3>
          <p className="header-text mt-2 font-bold">2 Years</p>
        </div>
        <div className="text-end mb-4 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-bold">Trusted by Families</h3>
          <p className="header-text mt-2 font-bold">32 Families</p>
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
        Our Partnership Organizations
      </h2>
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-10">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-12 sm:h-14 md:h-16 mb-1 sm:mb-2"
            />
            <span className="text-sm sm:text-base md:text-lg">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborate;
