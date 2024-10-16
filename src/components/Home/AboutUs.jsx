import about from "./../../assets/image/home/aboutus.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="md:w-1/2 px-0 md:px-5 lg:px-10 h-auto md:h-[300px] lg:h-[400px]">
        <h2 className="header-text font-bold mb-4">Quick and Caring Support</h2>
        <p className="body-text mb-6">
          At CARMEL, we make it easy to find kind and skilled caregivers. Our
          simple process helps you get the right care for your loved ones fast.
          Trust us for easy and reliable support.
        </p>
        <button className="bg-secondary shadow-lg body-text text-primary py-2 px-4 rounded">
          More About Us
        </button>
      </div>
      <div className="md:w-1/2 bg-primary h-[200px] md:h-[300px] lg:h-[400px] mt-8 md:mt-0">
        <img
          src={about}
          alt="Support"
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
