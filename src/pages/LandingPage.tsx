// import Navbar from "../components/Navbar";

// const LandingPage = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="mt-20">
//       LandingPage
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

import { BiBot } from "react-icons/bi";
import Navbar from "../components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import {
  FaArrowUp,
  FaFacebookMessenger,
  FaInstagram,
  FaStar,
  FaUserSecret,
} from "react-icons/fa";
import { MdOutlineSms } from "react-icons/md";
import { SiMake } from "react-icons/si";
// import { TbBrandZapier } from "react-icons/tb";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
// import BgImage from "../assets/images/2.webp";

const features = [
  {
    icon: <FaInstagram className="w-10 h-10 text-blue-900" />,
    title: "Instagram",
    desc: "Connect your AI to Instagram DMs",
  },
  {
    icon: <FaFacebookMessenger className="w-10 h-10 text-blue-900" />,
    title: "Messenger",
    desc: "Integrate with Facebook Messenger",
  },
  {
    icon: <MdOutlineSms className="w-10 h-10 text-blue-900" />,
    title: "SMS",
    desc: "Send and receive SMS messages",
  },
  {
    icon: <SiMake className="w-10 h-10 text-blue-900" />,
    title: "Make.com",
    desc: "Create powerful automation workflows",
  },
  //   {
  //     icon: <TbBrandZapier className="w-10 h-10 text-blue-900" />,
  //     title: "Go High Level",
  //     desc: "Connect with 5,000+ apps",
  //   },
  {
    icon: (
      <div className="flex flex-row items-center justify-center space-y-1 group">
        {[...Array(3)].map((_, i) => (
          <FaArrowUp
            key={i}
            className="w-4 h-4 text-blue-900 transition-transform duration-300 group-hover:-translate-y-1"
            style={{ transitionDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    ),
    title: "Go High Level",
    desc: "Connect with 5,000+ apps",
  },
];

const reviews = [
  {
    heading: "No 1. Platform",
    name: "John Doe",
    review:
      "This platform helped me find amazing clients for my AI agents. Super easy to use and reliable!",
  },
  {
    heading: "Low Cost",
    name: "Emily Clark",
    review:
      "Absolutely love the intuitive design! Built my first AI agent in minutes and got real results.",
  },
  {
    heading: "10/10 would recommend",
    name: "David Miller",
    review:
      "Top-notch platform with great community support. Highly recommended for anyone in AI automation.",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      {/* ✅ Hero Section */}
      {/* <section className="relative z-10 pt-32 pb-24 px-6"> */}
      <section
        className="relative z-10 pt-32 pb-24 px-6 bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${BgImage})` }}
      >
        {" "}
        {/* Overlay (this controls image opacity) */}
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-8">
              {/* Headline */}
              <div className="mt-24">
                <h1 className="text-3xl md:5xl lg:text-7xl font-bold leading-30 text-gray-900">
                  Build <span className="text-blue-900">AI Voice Agents</span>
                </h1>
                <h1 className="text-2xl lg:3xl lg:text-6xl font-bold">
                  and <span className="text-blue-900">find businesses</span>{" "}
                  that need them
                </h1>
              </div>
              {/* Subtitle */}
              <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
                An AI Agent Platform built to perform real-world tasks
                effortlessly.
              </p>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  className="group flex items-center justify-center gap-2 bg-black border border-transparent cursor-pointer text-white rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_rgba(255,255,255,1)]"
                  onClick={() => navigate("/initiate-call")}
                >
                  <BiBot className="w-5 h-5" />
                  Start building
                  <BsArrowRight className="w-4 h-4 mt-1 transform transition-transform duration-300 group-hover:translate-x-2" />
                </button>

                <button className="flex cursor-pointer items-center justify-center gap-2 bg-white text-gray-800 rounded-full px-8 py-3 text-lg font-medium transition border border">
                  <FaUserSecret className="w-5 h-5" />
                  Find clients
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 Feature Section */}
      {/* <section className="relative z-10 py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <button className="border px-6 py-2 rounded-full font-medium mb-6">
            Integrations
          </button>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-blue-900">Integrations</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Connect your AI Agents with the real world
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center border border-gray-100"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="relative z-10 py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Top Button */}
          <button className="border px-6 py-2 rounded-full font-medium mb-6">
            Integrations
          </button>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-blue-900">Integrations</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Connect your AI Agents with the real world
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center 
                     transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:scale-105"
              >
                <div
                  className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-4 
                       transition-all duration-500 group-hover:bg-blue-100 group-hover:rotate-6"
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl space-y-10">
          {/* Top Button */}
          <div className="text-center">
            <button className="rounded-full border text-black px-6 py-2">
              Testimonials
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            What Our Clients Say
          </h2>

          {/* Star Icons */}
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="w-6 h-6 fill-blue-900 text-yellow-400"
              />
            ))}
          </div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            {reviews.map((r, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-all duration-300 border border-blue-900"
              >
                {/* ✅ Heading instead of image */}
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                  {r.heading}
                </h3>

                {/* Review Text */}
                <p className="text-gray-600 text-base mb-6">{r.review}</p>

                {/* Footer */}
                <div className="flex items-center justify-between w-full mt-auto border-t border-blue-900 pt-4">
                  <span className="font-semibold text-gray-900">{r.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="w-4 h-4 fill-blue-900 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="text-center">
          <button className="bg-white text-black border rounded-full px-6 py-2">
            Ready?
          </button>
          <div className="text-5xl font-bold mt-10 leading-13">
            Build and Launch <br />
            <span className="text-blue-900">AI Voice Agents</span> Today
          </div>
          <div className="flex mt-8 flex-col sm:flex-row items-center justify-center gap-4 pt-4 mb-10">
            {/* <button className="flex items-center justify-center gap-2 bg-white border cursor-pointer text-black rounded-full px-8 py-3 text-lg font-medium transition">
              Get Started
              <BsArrowRight className="w-4 h-4" />
            </button> */}
            <button className="group flex items-center justify-center gap-2 bg-white border border cursor-pointer text-black rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_rgba(255,255,255,1)]">
              Getting Started
              <BsArrowRight className="w-4 h-4 mt-1 transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
