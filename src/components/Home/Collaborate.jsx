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
    <div className="text-center p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
        Collaborate for Better Care
      </h2>
      <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
        Work with us to improve senior care. Partner with our startup and
        contribute to making a real difference in people's lives.
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-10">
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
