import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaHandHoldingWater,
  FaCogs,
  FaWrench,
  FaAward,
  FaCheckCircle,
  FaRocket,
  FaStar,
  FaRegCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import image from '../assets/Dheeraj.jpg';
import images from '../assets/Akash.jpg';

const WHATSAPP_NUMBER = "919760076957";
const CALL_NUMBER = "+919368885489";

// TEAM DATA – Replace photo URLs with your own
const team = [
  {
    name: "Dheeraj sharma",
    role: "Founder & CEO",
    photo: `${image}`,
    skills: ["Leadership", "Strategy", "Customer Success"],
    joinDate: "19 Jun 2018",
  },
  {
    name: "Akash sharma",
    role: "Water Quality Expert",
    photo: `${images}`,
    skills: ["RO Technology", "Quality Testing", "Support", "Services"],
    joinDate: "19 Jun 2018",
  }
];

// SKILLS/EXPERTISE
const expertise = [
  { icon: <FaHandHoldingWater />, label: "Mokshika Water Purification" },
  { icon: <FaCogs />, label: "Annual Maintenance" },
  { icon: <FaWrench />, label: "Quick Installation" },
  { icon: <FaShieldAlt />, label: "Water Quality Testing" },
  { icon: <FaAward />, label: "Award-Winning Service" },
  { icon: <FaCheckCircle />, label: "Customer Satisfaction" },
];

// TIMELINE DATA
const timeline = [
  {
    year: "2018",
    icon: <FaRocket />,
    title: "Team Founded",
    desc: "Mokshika Water Purify started with a vision to provide clean water for every home.",
    date: "19 Jun 2018",
  },
  {
    year: "2019",
    icon: <FaCheckCircle />,
    title: "00+ Installations",
    desc: "Achieved the milestone of 600 successful RO installations in a year.",
    date: "29 Sep 2019",
  },
  {
    year: "2025",
    icon: <FaAward />,
    title: "Industry Recognition",
    desc: "Awarded as the most trusted Mokshika Water Purify  in the region.",
    date: "19 Jun 2025",
  },
  {
    year: "2025",
    icon: <FaStar />,
    title: "2000+ Happy Customers",
    desc: "Expanding across cities, serving thousands of families and offices.",
    date: "21 Aug 2025",
  },
];

const About = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 70 });
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light-theme"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const sectionBg = isLight ? "bg-gray-100" : "bg-[#14213d]";
  const cardBg = isLight ? "bg-white" : "bg-[#223359]";
  const cardText = isLight ? "text-gray-800" : "text-blue-100";
  const sectionTitle = isLight
    ? "text-2xl md:text-3xl font-bold text-blue-800 mb-4"
    : "text-2xl md:text-3xl font-bold text-blue-200 mb-4";

  return (
    <div>
      {/* FLOATING BUTTONS */}
      {/* <div className="fixed z-[9999] right-4 bottom-6 flex flex-col items-end gap-4">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110
            ${isLight ? "bg-green-500 text-white hover:bg-green-600" : "bg-green-500 text-white hover:bg-green-600"}
          `}
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={26} />
        </a>
        <a
          href={`tel:${CALL_NUMBER}`}
          aria-label="Call Now"
          className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110
            ${isLight ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-800"}
          `}
          title="Call Now"
        >
          <FaPhoneAlt size={22} />
        </a>
      </div> */}
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
      <section className={`relative w-full h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden ${sectionBg}`}>
        <img
          src="https://h2oglobalnews.com/wp-content/uploads/2023/08/water-types-scaled.webp"
          alt="About Hero"
          className="absolute w-full h-full object-cover object-center brightness-75"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg" data-aos="fade-down">
            About Mokshika Water Purify
          </h1>
          <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto drop-shadow" data-aos="fade-up" data-aos-delay="150">
            Providing pure, healthy, and great-tasting water for every home and office since 2017.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className={`${sectionBg} py-12 px-4`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={sectionTitle} data-aos="fade-down">Our Story</h2>
          <p className={`text-lg md:text-xl mb-6 ${isLight ? "text-gray-700" : "text-blue-100"}`}>
            Founded in 2018, Mokshika Water Purify began with a simple goal: to make clean and pure water accessible to every family. Our journey started in a small town, inspired by the desire to solve water quality issues faced by millions. Today, we have grown into a trusted name, delivering advanced RO technology, professional service, and a customer-first approach.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className={`${sectionBg} py-5 px-4`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={sectionTitle} data-aos="fade-up">Our Mission</h2>
          <p className={`text-lg mb-4 font-semibold italic ${isLight ? "text-blue-900" : "text-blue-200"}`}>
            "To ensure every home and business enjoys safe, clean, and healthy water with world-class RO solutions and dedicated support."
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className={`${sectionBg} py-10 px-4`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`${sectionTitle} text-center`} data-aos="fade-up">Meet Our Team</h2>
          {/* ✅ Cards centered in a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 justify-items-center">
            {team.map((member, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className={`flex flex-col items-center p-6 rounded-2xl shadow-md ${cardBg} ${cardText} hover:scale-105 transition-transform w-80`}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-3 object-cover border-4 border-blue-400"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=96`;
                  }}
                />
                <div className="font-bold text-lg mb-1 text-center">{member.name}</div>
                <div className="text-blue-500 font-semibold mb-2 text-center">{member.role}</div>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center mt-2 text-sm font-semibold text-blue-400">
                  <FaRegCalendarAlt className="mr-1" /> Joined: {member.joinDate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className={`${sectionBg} py-8 px-4`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`${sectionTitle} text-center`} data-aos="fade-up">Expertise & Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl shadow-md ${cardBg} ${cardText} font-medium`}
              >
                <span className="text-blue-500 text-2xl">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={`${sectionBg} py-10 px-4`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`${sectionTitle} text-center`} data-aos="fade-up">Our Milestones</h2>
          <div className="relative mt-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-300 opacity-50" />
            <div className="flex flex-col gap-12 relative z-10">
              {timeline.map((milestone, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 120}
                  className="relative flex flex-col items-center md:items-start md:flex-row md:odd:flex-row-reverse group"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500 text-white rounded-full p-4 mb-2 shadow-lg text-2xl">
                      {milestone.icon}
                    </div>
                    <div className="text-blue-800 font-bold text-lg">{milestone.year}</div>
                  </div>
                  <div
                    className={`md:w-1/2 mx-4 mt-4 md:mt-0 bg-blue-100 ${isLight ? "text-blue-900" : "text-blue-800"} p-4 rounded-xl shadow-md`}
                  >
                    <div className="font-semibold flex items-center gap-2">
                      {milestone.title}
                      <span className="text-xs text-blue-600 flex items-center gap-1">
                        <FaRegCalendarAlt /> {milestone.date}
                      </span>
                    </div>
                    <div className="text-sm">{milestone.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className={`${sectionBg} py-10 px-4`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={sectionTitle} data-aos="fade-up">Ready for Pure Water?</h2>
          <p className={`mb-6 text-lg ${isLight ? "text-gray-700" : "text-blue-100"}`}>
            Contact us today for a free consultation or water quality check. Experience the difference with Mokshika Water Purify!
          </p>
          <div className="flex justify-center gap-6">
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
        </div>
      </section>
    </div>
  );
};

export default About;
