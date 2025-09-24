import React, { useEffect, useState } from "react";
import {
  FaCalendarCheck,
  FaHandshake,
  FaTools,
  FaRegSmileBeam,
  FaCogs,
  FaShieldAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaWrench,
  FaUserShield,
  FaMoneyBillWave,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const plans = [
  {
    icon: <FaCalendarCheck />,
    title: "1-Year AMC Plan",
    desc: "Covers all maintenance, 3 service visits, free filter cleaning, and priority support.",
  },
  {
    icon: <FaCogs />,
    title: "Comprehensive Coverage",
    desc: "Includes filter change, minor parts, leak repairs, performance checks & water testing.",
  },
  {
    icon: <FaUserShield />,
    title: "Verified Technicians",
    desc: "Service by skilled, background-checked experts. Genuine parts only.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Pricing",
    desc: "Transparent charges, no hidden fees, and flexible payment options.",
  },
];

const benefits = [
  {
    icon: <FaRegSmileBeam />,
    title: "Peace of Mind",
    desc: "No more sudden breakdowns or unsafe water. Your Mokshika Water Purify is always in top shape.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Reminders",
    desc: "We call/SMS before every scheduled service so you never miss a checkup.",
  },
  {
    icon: <FaWrench />,
    title: "Free Minor Repairs",
    desc: "AMC covers minor repairs and adjustments at no extra cost.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Extended RO Life",
    desc: "Regular care means better performance and longer RO lifespan.",
  },
];

const faqs = [
  {
    q: "What is included in AMC?",
    a: "Free service visits, filter cleaning, minor repairs, priority support, and discounted spare parts.",
  },
  {
    q: "How do I schedule my maintenance?",
    a: "We remind you before every service. You can also call, WhatsApp, or use our website to book.",
  },
  {
    q: "Is filter replacement free?",
    a: "Filter cleaning is free. Filter replacement is at extra cost but with a special AMC discount.",
  },
  {
    q: "Do I get priority in breakdowns?",
    a: "Yes! AMC customers get faster response during breakdowns and emergencies.",
  },
];

const WHATSAPP_NUMBER = "919760076957";
const CALL_NUMBER = "+919368885489";

const AnnualMaintenance = () => {
  const [isLight, setIsLight] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

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
          src="https://content.jdmagicbox.com/comp/def_content/ro-water-purifier-repair-and-services/pl7by9ebry-ro-water-purifier-repair-and-services-8-6clxi.jpg"
          alt="Annual Maintenance"
          className="absolute w-full h-full object-cover object-center brightness-75"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg" data-aos="fade-down">
            Annual Maintenance (AMC)
          </h1>
          <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto drop-shadow" data-aos="fade-up" data-aos-delay="150">
            Hassle-free RO AMC plans for a worry-free year. Keep your water pure and your RO in top condition—always!
          </p>
        </div>
      </section>

      {/* AMC PLANS */}
      <section className={`${sectionBg} py-12 px-4`}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={titleCls} data-aos="fade-up">Our AMC Plans & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 120}
                className={`flex flex-col items-center p-6 rounded-2xl shadow-md ${cardBg} ${cardText} hover:scale-105 transition-transform`}
              >
                <div className="text-4xl mb-3 text-blue-500">{plan.icon}</div>
                <div className="font-bold text-lg mb-1">{plan.title}</div>
                <div className="text-sm opacity-80">{plan.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className={`${sectionBg} py-10 px-4`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={titleCls + " text-center"} data-aos="fade-up">Why Take AMC?</h2>
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
          <h2 className={titleCls}>Book Your AMC Now!</h2>
          <p className={`mb-6 text-lg ${isLight ? "text-gray-700" : "text-blue-100"}`}>
            Call, WhatsApp, or fill our contact form for instant AMC quote and free consultation.
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
            Book Online <FaArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={`${sectionBg} py-12 px-4`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={titleCls + " text-center"} data-aos="fade-up">AMC FAQs</h2>
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

export default AnnualMaintenance;