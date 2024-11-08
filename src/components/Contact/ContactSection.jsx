// import React from 'react';

const ContactSection = () => {
  return (
    <div className="h-[90vh] lg:w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 px-5 sm:px-20 md:px-6">
      {/* Hotline Contact Card */}
      <div className="bg-primary text-center px-6 text-white rounded-lg py-10 md:py-0 flex md:h-[350px] flex-col justify-center shadow-md w-full md:w-1/2">
        <h3 className="header-text font-bold">Hotline Contact</h3>
        <p className="mt-2 body-text">
          Our office hours are Monday to Friday, 9 AM to 5 PM. We’re here to
          assist you with any questions or support you need.
        </p>
        <a
          href="tel:091292312314"
          className="mt-4 bg-white font-bold text-primary w-64 mx-auto rounded-lg text-center py-4 hover:bg-gray-200"
        >
          Call Our Hotline
        </a>
      </div>

      {/* Social Contact Card */}
      <div className="text-center bg-primary text-white rounded-lg px-6 py-10 md:py-0 md:h-[350px] flex flex-col justify-center shadow-md w-full md:w-1/2">
        <h3 className="header-text font-bold">Social Contact</h3>
        <p className="mt-2 body-text">
          Need help? Reach out via Messenger for quick support. We’re here for
          you!
        </p>
        <a
          href="https://m.me/yourmessengerlink"
          className="mt-4 mx-auto bg-white w-64 font-bold text-primary rounded-lg text-center py-4 hover:bg-gray-200"
        >
          Message Us on Messenger
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
