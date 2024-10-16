const HeroBanner = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="font-bold header-text mb-4">
          Compassionate hearts, <br /> dedicated hands.
        </h1>
        <p className="body-text mb-5 mx-auto max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <button className="inline-block px-6 py-3 body-text bg-primary rounded-lg hover:bg-green-600 transition duration-200">
          <p className="text-white">Hiring a Caregiver</p>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
