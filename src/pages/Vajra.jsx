import React, { useState } from 'react';

const Vajra = () => {
  const services = [
    {
      title: "Real-Time Network Optimisation",
      description:
        "Optimize network performance instantly with real-time adjustments.",
      image: "Real_Time_Maintainance.png",
    },
    {
      title: "Predictive Maintenance",
      description:
        "Predict and prevent network issues before they impact service.",
      image: "predictive_maintainance.png",
    },
    {
      title: "Content Delivery Network (CDN) Optimization",
      description:
        "Enhance content delivery speed and quality globally.",
      image: "cdn_optimization.png",
    },
    {
      title: "Real-Time Monitoring and Analytics",
      description:
        "Monitor network health and performance in real-time with actionable insights.",
      image: "RT_Monitoring.png",
    },
    {
      title: "Automated Decision-Making",
      description:
        "Utilize AI to make automated decisions for enhanced network efficiency.",
      image: "Automated_DM.png",
    },
  ];

  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);

  const handlePayment = (currency) => {
    // Razorpay API key (replace with your live API key in production)
    const razorpayKey = "rzp_test_1234567890ABCDEF"; // Replace with your Razorpay API key

    // Define the amount in paise (100 paise = 1 INR, 10000 paise = 100 USD)
    const amount = currency === 'INR' ? 5000 : 10000; // 5000 paise = 50 INR, 10000 paise = 100 USD

    const options = {
      key: razorpayKey, // Razorpay key
      amount: amount, // Amount in paise
      currency: currency, // Currency (INR or USD)
      name: "Vajra Services",
      description: "Subscription Plan Payment",
      image: "URL_TO_YOUR_LOGO", // Optional: Add your logo here
      handler: function (response) {
        alert("Payment successful: " + response.razorpay_payment_id);
        // Handle the payment response, e.g., save the details to your backend
        // You can integrate backend APIs to store the payment info if needed
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "+919876543210",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#528FF0",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open(); // Open Razorpay payment window
  };

  const handleShowCurrencyOptions = () => {
    setShowCurrencyOptions(true);
  };

  return (
    <div id="vajra" className="bg-white text-black min-h-screen font-['Times_New_Roman']">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">
          Vajra
        </h1>
        <p className="text-xl">Faster, Smarter, and More Reliable Internet Services</p>
      </header>

      {/* Vajra Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">
            Vajra Services
          </h2>
          <p className="text-lg mb-10">
            Vajra delivers faster, smarter, and more reliable internet services
            by combining AI, real-time analytics, and advanced optimization
            techniques to revolutionize internet data transmission.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm cursor-pointer"
                />

                {/* Title - Centered initially, moves to the top on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-transform duration-300 group-hover:translate-y-[-40px]">
                  <h3 className="text-xl font-semibold text-white z-10">
                    {service.title}
                  </h3>
                </div>

                {/* Description - Visible on Hover */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-y-[40px]">
                  <p className="text-white px-4 text-center mt-4">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="bg-white py-8 text-black">
        <div className="container mx-auto px-6 text-left">
          <h2 className="text-3xl mb-4 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">
            Terms and Conditions
          </h2>
          <p className="text-base mb-2 bg-gray-300 p-4">
            Please read the following terms and conditions carefully before using Vajra's services.
          </p>
          <div className="text-left space-y-3">
            <h4 className="text-xl">Refund Policy</h4>
            <p className="text-base leading-relaxed">
              There are no refund policies for Vajra services. However, you may cancel your subscription
              within 7 days prior to the renewal date. Any cancellation after the 7-day window will not be
              eligible for a refund.
            </p>
            <h4 className="text-xl">Usage of Vajra Services</h4>
            <p className="text-base leading-relaxed">
              By subscribing to Vajra's services, you agree to our terms, including service performance
              expectations, network optimization, and the use of AI and predictive maintenance.
            </p>
            <h4 className="text-xl">Service Availability</h4>
            <p className="text-base leading-relaxed">
              Vajra strives to provide continuous and uninterrupted service. However, service disruptions
              may occur due to unforeseen circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Pay Button Section */}
      <section className="py-8 text-center">
        {!showCurrencyOptions && (
          <button
            onClick={handleShowCurrencyOptions}
            className="px-8 py-3 text-white bg-gradient-to-r from-black to-blue-900 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
          >
            Pay Now
          </button>
        )}

        {/* Currency Selection - Show when "Pay Now" is clicked */}
        {showCurrencyOptions && (
          <div className="mt-4">
            <button
              onClick={() => handlePayment('INR')}
              className="px-8 py-3 text-white bg-gradient-to-r from-black to-blue-900 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300 mr-10"
            >
              Pay in INR
            </button>
            <button
              onClick={() => handlePayment('USD')}
              className="px-8 py-3 text-white bg-gradient-to-r from-black to-blue-900 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition duration-300 "
            >
              Pay in USD
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Vajra;
