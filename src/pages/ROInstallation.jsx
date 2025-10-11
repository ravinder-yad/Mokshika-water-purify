import React, { useEffect, useState } from "react";
import {
  FaTools,
  FaCheckCircle,
  FaCogs,
  FaUserTie,
  FaShieldAlt,
  FaRegSmile,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const processSteps = [
  {
    icon: <FaUserTie />,
    title: "Free Site Visit",
    desc: "Our experts visit your home or office, check water quality and suggest the best Mokshika Water Purify RO model for you.",
  },
  {
    icon: <FaCogs />,
    title: "Professional Installation",
    desc: "Hassle-free installation by certified technicians at your convenient time. Clean and safe process.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Water Quality Testing",
    desc: "After installation, water is tested for TDS & purity. We ensure only the best for your family.",
  },
  {
    icon: <FaTools />,
    title: "Demo & Maintenance Tips",
    desc: "Filter demo, quick guide, and maintenance tips for long-lasting RO performance.",
  },
];

const benefits = [
  {
    icon: <FaRegSmile />,
    title: "Safe & Healthy Water",
    desc: "Removes bacteria, viruses, heavy metals, and impurities for 100% pure water.",
  },
  {
    icon: <FaCheckCircle />,
    title: "All Brands Supported",
    desc: "Installation & service available for all leading RO brands (Kent, Aquaguard, Livpure, etc).",
  },
  {
    icon: <FaCogs />,
    title: "Quick Response",
    desc: "Fast appointment scheduling and same-day installation for most locations.",
  },
  {
    icon: <FaShieldAlt />,
    title: "1-Year Service Assurance",
    desc: "Enjoy peace of mind with our free support and AMC plans.",
  },
];

const faqs = [
  {
    q: "How much time does RO installation take?",
    a: "Usually 30-45 minutes, depending on your water source and location.",
  },
  {
    q: "What should I keep ready before technician visit?",
    a: "Ensure a water inlet, power socket, and a drainage point near the installation site.",
  },
  {
    q: "Do you install customer-supplied RO units?",
    a: "Yes, we install any brand or model, whether you buy from us or bring your own.",
  },
  {
    q: "Is water testing included?",
    a: "Yes! We test the water before and after installation for your assurance.",
  },
];

const WHATSAPP_NUMBER = "919760076957";
const CALL_NUMBER = "+919368885489";

const RoInstallation = () => {
  const [isLight, setIsLight] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem('scrollPosition');
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
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

  const sectionBg = isLight ? "bg-gray-50" : "bg-[#1a2740]";
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
      <section className={`relative w-full h-[330px] md:h-[380px] flex items-center justify-center overflow-hidden ${sectionBg}`}>
        <img
          src="https://media.istockphoto.com/id/1529006638/photo/a-large-industrial-set-installation-of-reverse-osmosis-system-and-nanofiltration-membranes.jpg?s=612x612&w=0&k=20&c=HeeY6s6yMnmGQfaz-_GETB8KNt0RxD6jaBBHi49zZY8="
          alt="RO Installation"
          className="absolute w-full h-full object-cover object-center brightness-75"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg" data-aos="fade-down">
            Mokshika Water Purify Installation Service
          </h1>
          <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto drop-shadow" data-aos="fade-up" data-aos-delay="150">
            Get expert RO installation for any brand at your doorstep. Fast, professional, and affordable—ensuring pure water for your family.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className={`${sectionBg} py-12 px-4`}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={titleCls} data-aos="fade-up">How Our Installation Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {processSteps.map((step, idx) => (
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
          <h2 className={titleCls + " text-center"} data-aos="fade-up">Why Book With Us?</h2>
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
          <h2 className={titleCls}>Ready to Book Your RO Installation?</h2>
          <p className={`mb-6 text-lg ${isLight ? "text-gray-700" : "text-blue-100"}`}>
            Call, WhatsApp, or fill our contact form for instant appointment.
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
          <h2 className={titleCls + " text-center"} data-aos="fade-up">Frequently Asked Questions</h2>
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

export default RoInstallation;