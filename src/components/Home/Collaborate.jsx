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
    <div className="mx-auto px-5 md:px-10 py-4 sm:py-6 md:py-8 mt-1 sm:mt-2 md:mt-5">
      <div className="mb-10 flex flex-col md:flex-row justify-around md:bg-green-600 text-white rounded-lg md:shadow-lg md:p-10">
        <div className="mb-4 md:mb-0 md:w-1/3 bg-green-600 py-5 px-10 md:p-0 rounded-3xl">
          <h3 className="text-md  md:text-xl font-bold">Active Caregivers</h3>
          <p className="header-text mt-2 font-bold">56 Caregivers</p>
        </div>
        <div className="md:text-center mb-4 md:mb-0 md:w-1/3 bg-green-600 py-5 px-10 md:p-0 rounded-3xl">
          <h3 className="text-xl font-bold">Years of Service</h3>
          <p className="header-text mt-2 font-bold">2 Years</p>
        </div>
        <div className="md:text-end mb-4 md:mb-0 md:w-1/3 bg-green-600 py-5 px-10 md:p-0 rounded-3xl">
          <h3 className="text-xl font-bold">Trusted by Families</h3>
          <p className="header-text mt-2 font-bold">32 Families</p>
        </div>
      </div>
      <div className="md:py-20 border-slate-300 border-2 sm:border-0 flex flex-col items-center md:items-start rounded-lg py-5 md:py-0">
        <h2 className="text-xl text-center md:text-start md:text-4xl font-bold sm:mb-0 md:mb-4">
          Our Partnership Organizations
        </h2>
        <div className="sm:flex flex-wrap gap-4 sm:gap-10 md:gap-8 lg:gap-20 sm:mt-0 md:mt-10">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col my-8 items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-16 mb-1 sm:mb-2"
              />
              <span className="hidden sm:block text-sm sm:text-base md:text-lg">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
