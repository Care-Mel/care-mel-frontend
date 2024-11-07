// import React from 'react';

const ContactSection = () => {
  return (
    <div className="h-[80vh] container mx-auto flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 p-6">
      {/* Hotline Contact Card */}
      <div className="bg-green-500 text-center text-white rounded-lg p-6 flex flex-col justify-center shadow-md w-full md:w-1/2">
        <h3 className="header-text font-bold">Hotline Contact</h3>
        <p className="mt-2 body-text">
          Our office hours are Monday to Friday, 9 AM to 5 PM. We’re here to
          assist you with any questions or support you need.
        </p>
        <a
          href="tel:091292312314"
          className="mt-4 bg-white font-bold text-green-500 w-64 mx-auto rounded-lg text-center py-4   hover:bg-gray-200"
        >
          Call Our Hotline
        </a>
      </div>

      {/* Social Contact Card */}
      <div className="text-center bg-green-500 text-white rounded-lg p-6 flex flex-col justify-center shadow-md w-full md:w-1/2">
        <h3 className="header-text font-bold">Social Contact</h3>
        <p className="mt-2 body-text">
          Need help? Reach out via Messenger for quick support. We’re here for
          you!
        </p>
        <a
          href="https://m.me/yourmessengerlink"
          className="mt-4 mx-auto bg-white w-64 font-bold text-green-500 rounded-lg text-center py-4 hover:bg-gray-200"
        >
          Message Us on Messenger
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
