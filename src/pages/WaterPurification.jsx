import React, { useEffect, useState } from "react";
import {
  FaTint,
  FaCheckCircle,
  FaShieldAlt,
  FaRecycle,
  FaLeaf,
  FaFilter,
  FaClock,
  FaFlask,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const purificationSteps = [
  {
    icon: <FaFilter />,
    title: "Multi-Stage Filtration",
    desc: "Removes dust, sand, rust and other large impurities using pre-filters.",
  },
  {
    icon: <FaFlask />,
    title: "RO Membrane Purification",
    desc: "Reverse Osmosis eliminates heavy metals, harmful chemicals, and dissolved salts.",
  },
  {
    icon: <FaShieldAlt />,
    title: "UV Sterilization",
    desc: "Ultraviolet treatment kills bacteria, viruses, and other harmful microorganisms.",
  },
  {
    icon: <FaLeaf />,
    title: "Mineral Addition",
    desc: "Restores essential minerals for healthy, great-tasting water.",
  },
];

const benefits = [
  {
    icon: <FaCheckCircle />,
    title: "Removes 99.99% Impurities",
    desc: "Enjoy pure, healthy, and safe drinking water every day.",
  },
  {
    icon: <FaRecycle />,
    title: "Eco-Friendly Solutions",
    desc: "Advanced purification with minimal water wastage.",
  },
  {
    icon: <FaClock />,
    title: "Instant Purification",
    desc: "Get clean water in seconds, fresh from your tap.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe for All Ages",
    desc: "Pure water for kids, elders, and everyone in between.",
  },
];

const faqs = [
  {
    q: "Why is RO water purification necessary?",
    a: "RO water purification removes contaminants, heavy metals, and harmful bacteria, ensuring every sip is safe and healthy.",
  },
  {
    q: "How often should I replace my filters?",
    a: "Typically every 6-12 months, but it depends on usage and water quality. Our team reminds you for timely maintenance.",
  },
  {
    q: "Does it waste a lot of water?",
    a: "Our advanced RO systems are designed for minimal water wastage and maximum efficiency.",
  },
  {
    q: "Will minerals be lost?",
    a: "No, our systems add back essential minerals after purification so you get health and taste together.",
  },
];

const WHATSAPP_NUMBER = "919760076957";
const CALL_NUMBER = "+919368885489";

const WaterPurification = () => {
  const [isLight, setIsLight] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  // Scroll to top on component mount (page load/reload)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 70 });
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light-theme"));
    };
    checkTheme();
    const obs = new MutationObserver(checkTheme);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const sectionBg = isLight ? "bg-blue-50" : "bg-[#1a2740]";
  const cardBg = isLight ? "bg-white" : "bg-[#223359]";
  const cardText = isLight ? "text-gray-900" : "text-blue-100";
  const titleCls = isLight
    ? "text-2xl md:text-4xl font-bold text-blue-900 mb-4"
    : "text-2xl md:text-4xl font-bold text-blue-200 mb-4";
  const buttonCls = isLight
    ? "px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-800 transition-all"
    : "px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow hover:bg-blue-700 transition-all";

  return (
    <div>
      {/* FLOATING BUTTONS */}
      <div className="fixed z-50 right-4 bottom-6 flex flex-col items-end gap-3 md:gap-4">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 bg-green-500 text-white hover:bg-green-600"
          aria-label="WhatsApp"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href={`tel:${CALL_NUMBER}`}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${isLight
            ? "bg-blue-500 text-white hover:bg-blue-700"
            : "bg-blue-700 text-white hover:bg-blue-900"
            }`}
          aria-label="Call"
          data-aos="zoom-in"
          data-aos-delay="650"
        >
          <FaPhoneAlt size={18} />
        </a>
      </div>

      {/* HERO SECTION */}
      <section className={`relative w-full h-[320px] md:h-[380px] flex items-center justify-center overflow-hidden ${sectionBg}`}>
        <img
          src="https://www.wfa.com.au/wp-content/uploads/2019/02/WFA-The-history-of-water-filter-system.jpg"
          alt="Water Purification"
          className="absolute w-full h-full object-cover object-center brightness-75"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg" data-aos="fade-down">
            Water Purification
          </h1>
          <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto drop-shadow" data-aos="fade-up" data-aos-delay="150">
            Discover the secret to pure, safe, and great-tasting water with our advanced RO purification process.
          </p>
        </div>
      </section>

      {/* PURIFICATION PROCESS */}
      <section className={`${sectionBg} py-12 px-4`}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={titleCls} data-aos="fade-up">Our 4-Step Purification Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {purificationSteps.map((step, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 120}
                className={`flex flex-col items-center p-6 rounded-2xl shadow-md ${cardBg} ${cardText} hover:scale-105 transition-transform`}
              >
                <div className="text-4xl mb-3 text-blue-500">{step.icon}</div>
                <div className="font-bold text-lg mb-1">{step.title}</div>
                <div className="text-sm opacity-80">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className={`${sectionBg} py-10 px-4`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={titleCls + " text-center"} data-aos="fade-up">Why Choose Our Purification?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 70}
                className={`flex flex-col items-center p-6 rounded-2xl shadow-md ${cardBg} ${cardText} hover:scale-105 transition-transform`}
              >
                <div className="text-3xl mb-2 text-blue-500">{b.icon}</div>
                <div className="font-bold text-lg mb-1">{b.title}</div>
                <div className="text-sm opacity-80">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOOK NOW */}
      <section className={`${sectionBg} py-10 px-4`}>
        <div className="max-w-xl mx-auto text-center" data-aos="fade-up">
          <h2 className={titleCls}>Ready for Pure, Healthy Water?</h2>
          <p className={`mb-6 text-lg ${isLight ? "text-gray-700" : "text-blue-100"}`}>
            Call, WhatsApp, or fill our contact form for a free consultation or water quality test.
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-bold text-lg shadow-lg hover:bg-green-600 transition-all"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
            <a
              href={`tel:${CALL_NUMBER}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition-all"
            >
              <FaPhoneAlt /> Call Now
            </a>
          </div>
          <button
            className={buttonCls + " flex items-center gap-2 mx-auto"}
            onClick={() => navigate("/contact")}
          >
            Book Water Test Now
          </button>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={`${sectionBg} py-12 px-4`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={titleCls + " text-center"} data-aos="fade-up">Water Purification FAQs</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className={`rounded-xl shadow-md ${cardBg} ${cardText} p-5 cursor-pointer transition-all`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between font-semibold text-lg">
                  <span>{faq.q}</span>
                  <span className={`text-2xl transition-transform duration-300 ${openFaq === idx ? "rotate-90" : ""}`}>›</span>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out text-base mt-2 overflow-hidden ${openFaq === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  style={{ minHeight: openFaq === idx ? 32 : 0 }}
                >
                  {openFaq === idx && <div className="pt-2">{faq.a}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterPurification;