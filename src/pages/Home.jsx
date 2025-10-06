import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTrophy,
  FaTools,
  FaWater,
  FaRegSmile,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaUsers,
  FaNewspaper,
  FaChartLine,
  FaCogs,
  FaHandHoldingWater,
  FaWrench,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// HERO SLIDER DATA
const images = [
  {
    url: "https://t4.ftcdn.net/jpg/07/99/05/97/360_F_799059788_9agV3otEoPEj2DynLK0SBju16TFOS3DP.jpg",
    heading: "Drink Pure, Live Pure",
    text: "Experience premium Mokshika Water Purify for your family’s health and happiness. Trusted by thousands for purity and taste.",
    btn: "View Products",
    btnLink: "/gallery",
  },
  {
    url: "https://img.waimaoniu.net/2587/2587-202309161038184157.jpg",
    heading: "Advanced Mokshika Water Purify Technology",
    text: "Modern Mokshika Water Purify with 99.99% purification. No compromise in safety, only fresh and clean water, every time.",
    btn: "Why Choose Us?",
    btnLink: "/about",
  },
  {
    url: "https://wetpurewater.com/wp-content/uploads/2019/07/water-filer-post.jpg",
    heading: "Expert Water Care",
    text: "Installation, maintenance, and service by experts. Hassle-free filter replacement—so you enjoy uninterrupted purity.",
    btn: "Book a Service",
    btnLink: "/contact",
  },
  {
    url: "https://static.vecteezy.com/system/resources/previews/028/659/711/non_2x/water-concept-background-fresh-clean-display-water-texture-details-ai-generative-free-photo.jpg",
    heading: "Your Trust, Our Promise",
    text: "Join the Mokshika Water Purify family and bring home the gift of clean water. 24x7 support, quick response, and real results!",
    btn: "See Gallery",
    btnLink: "/gallery",
  },
];

// FEATURES DATA
const features = [
  {
    icon: <FaTrophy />,
    title: "Award-Winning Service",
    desc: "Recognized for excellence in water purification across India.",
    page: "/about",
  },
  {
    icon: <FaWater />,
    title: "99.99% Pure Water",
    desc: "Multi-stage RO + UV technology for crystal clear water.",
    page: "/gallery",
  },
  {
    icon: <FaTools />,
    title: "Free Installation",
    desc: "Expert installation at your doorstep, no hidden charges.",
    page: "/ro-installation",
  },
  {
    icon: <FaRegSmile />,
    title: "Happy Customers",
    desc: "Thousands of families and offices trust our solutions.",
    page: "/about",
  },
];

// SERVICES DATA
const services = [
  {
    icon: <FaHandHoldingWater />,
    title: "Mokshika Water Purify Water Purifiers",
    desc: "Best-in-class purification for homes and offices.",
    page: "/gallery",
  },
  {
    icon: <FaCogs />,
    title: "Annual Maintenance",
    desc: "Worry-free AMC plans for year-round purity.",
    page: "/annual-maintenance",
  },
  {
    icon: <FaWrench />,
    title: "Filter Replacement",
    desc: "Genuine filters, quick service, best price.",
    page: "/filter-replacement",
  },
  {
    icon: <FaPhoneAlt />,
    title: "24x7 Support",
    desc: "Call anytime for queries, complaints or service.",
    page: "/contact",
  },
];

// TESTIMONIALS DATA
const testimonials = [
  {
    name: "Dr. Amit Sharma",
    feedback:
      "Mokshika Water Purify has made my family's health their priority! The water tastes amazing and customer service is top-notch.",
    rating: 5,
  },
  {
    name: "Fo.Badlav Pradeep",
    feedback:
      "Very professional installation and the maintenance is hassle-free. Highly recommend to all!",
    rating: 5,
  },
  {
    name: "Lt. Kapil Srivastava",
    feedback:
      "Best Mokshika Water Purify I have tried. Quick response, genuine products & affordable AMC plans.",
    rating: 4,
  },
];

// STATS DATA
const stats = [
  {
    icon: <FaUsers />,
    label: "Happy Customers",
    value: "2,000+",
  },
  {
    icon: <FaCheckCircle />,
    label: "Installations",
    value: "1,500+",
  },
  {
    icon: <FaStar />,
    label: "Avg. Rating",
    value: "4.9/5",
  },
  {
    icon: <FaChartLine />,
    label: "Years Experience",
    value: "8+",
  },
];

// BLOG/UPDATES DATA
const blogs = [
  {
    title: "How to Choose the Best RO in 2025?",
    desc: "Our expert guide helps you pick the right purifier for your family’s unique needs.",
    link: "/about",
  },
  {
    title: "Why Regular RO Maintenance is Important",
    desc: "Learn the health and savings benefits of annual RO maintenance.",
    link: "/annual-maintenance",
  },
  {
    title: "Customer Story: Clean Water Changed Our Life",
    desc: "Read how RO impacted a Agra family's health.",
    link: "/gallery",
  },
  {
    title: "RO vs UV: Which is Better?",
    desc: "Detailed comparison so you can make the smartest choice.",
    link: "/about",
  },
  {
    title: "5 Tips for RO Filter Life",
    desc: "Simple things you can do at home for longer filter life.",
    link: "/filter-replacement",
  },
  {
    title: "Contact Us for Free Water Testing",
    desc: "Book a free water quality check today.",
    link: "/free-water-testing",
  },
];

const WHATSAPP_NUMBER = "919760076957";
const CALL_NUMBER = "+919368885489";

const Home = () => {
  // HERO/SLIDER LOGIC
  const [current, setCurrent] = useState(0);
  const [isLight, setIsLight] = useState(false);
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
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5400);
    return () => clearTimeout(timer);
  }, [current]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const headingClass = isLight
    ? "text-3xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm"
    : "text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg";
  const textClass = isLight
    ? "text-lg md:text-2xl text-gray-700 mt-4 mb-8"
    : "text-lg md:text-2xl text-[#e0eaf6] mt-4 mb-8";
  const buttonClass = isLight
    ? "px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
    : "px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300";

  // THEME FOR SECTIONS
  const sectionBg = isLight ? "bg-gray-100" : "bg-[#1a2740]";
  const cardBg = isLight ? "bg-white" : "bg-[#223359]";
  const cardText = isLight ? "text-gray-800" : "text-blue-100";
  const sectionTitle = isLight
    ? "text-2xl md:text-3xl font-bold text-blue-800 mb-4"
    : "text-2xl md:text-3xl font-bold text-blue-200 mb-4";

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

      {/* HERO SLIDER SECTION */}
      <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden select-none transition-all duration-500">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000
              ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          >
            <img
              src={img.url}
              alt={img.heading}
              className="w-full h-full object-cover object-center brightness-90"
              draggable={false}
              style={{ minHeight: "400px", maxHeight: "100vh" }}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                ${isLight ? "bg-gradient-to-t from-white/80 via-white/40 to-transparent" : ""}
                transition-all duration-500
              `}
            ></div>
            <div className="absolute z-20 max-w-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-4" data-aos="fade-up">
              <h1 className={headingClass}>{img.heading}</h1>
              <p className={textClass}>{img.text}</p>
              <button
                className={buttonClass}
                onClick={() => navigate(img.btnLink)}
              >
                {img.btn}
              </button>
            </div>
          </div>
        ))}
        {/* Arrow Buttons */}
        <button
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 hover:bg-blue-100 shadow-md text-blue-600 transition-all duration-200"
        >
          <FaArrowLeft size={22} />
        </button>
        <button
          aria-label="Next Slide"
          onClick={nextSlide}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 hover:bg-blue-100 shadow-md text-blue-600 transition-all duration-200"
        >
          <FaArrowRight size={22} />
        </button>
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border-2 border-blue-500 transition-all duration-200 ${idx === current
                ? isLight
                  ? "bg-blue-600"
                  : "bg-blue-400"
                : isLight
                  ? "bg-white"
                  : "bg-gray-800"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className={`${sectionBg} py-14 px-4`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={sectionTitle} data-aos="fade-down">Welcome to Mokshika Water Purify</h2>
          <p className={`text-xl md:text-2xl mb-6 ${isLight ? "text-gray-700" : "text-blue-100"}`}>
            Pure water, pure life! We are dedicated to providing the most advanced and reliable Mokshika Water Purify systems for homes and businesses.
            <span className="block mt-2 text-blue-500 font-semibold">Your health, our commitment!</span>
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className={`${sectionBg} py-10 px-4`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`${sectionTitle} text-center`} data-aos="fade-up">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 60}
                onClick={() => navigate(feature.page)}
                className={`flex flex-col items-center p-6 rounded-2xl shadow-md cursor-pointer ${cardBg} ${cardText} hover:scale-105 transition-transform duration-500`}
                style={{ minHeight: 200 }}
                title="Click for more info"
              >
                <div className="text-4xl mb-4 text-blue-500">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-center">{feature.title}</h3>
                <p className="text-center text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={`${sectionBg} py-10 px-4`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`${sectionTitle} text-center`} data-aos="fade-up">Our Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 70}
                onClick={() => navigate(service.page)}
                className={`flex flex-col items-center p-6 rounded-2xl shadow-md cursor-pointer ${cardBg} ${cardText} hover:shadow-xl hover:scale-105 transition-transform duration-500`}
                style={{ minHeight: 200 }}
                title="Click for more info"
              >
                <div className="text-4xl mb-4 text-blue-500">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-center">{service.title}</h3>
                <p className="text-center text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS/NUMBERS SECTION */}
      <section className={`py-10 px-4 ${isLight ? "bg-blue-50" : "bg-blue-950"}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                className={`flex flex-col items-center p-6 rounded-xl shadow-md ${isLight ? "bg-white" : "bg-blue-900"} ${isLight ? "text-blue-800" : "text-blue-100"}`}
              >
                <div className="text-3xl mb-2 text-blue-500">{stat.icon}</div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm mt-1 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS/REVIEWS SECTION */}
      <section className={`${sectionBg} py-14 px-4`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`${sectionTitle} text-center`} data-aos="fade-up">What Our Customers Say</h2>
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            {testimonials.map((review, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`flex-1 flex flex-col p-6 rounded-2xl shadow-md ${cardBg} ${cardText}`}
              >
                <FaQuoteLeft className="text-blue-400 text-2xl mb-2" />
                <p className="mb-4 text-lg font-medium">"{review.feedback}"</p>
                <div className="flex items-center mt-auto">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="font-bold">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG/UPDATES SECTION */}
      <section className={`${sectionBg} py-14 px-4`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`${sectionTitle} text-center`} data-aos="fade-up">
            <FaNewspaper className="inline-block mb-1 mr-2" /> Latest Updates & Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 70}
                onClick={() => navigate(blog.link)}
                className={`flex flex-col justify-between p-6 rounded-2xl shadow-md cursor-pointer ${cardBg} ${cardText} hover:scale-105 transition-transform duration-500`}
                style={{ minHeight: 200 }}
                title="Read More"
              >
                <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                <p className="mb-4 text-sm">{blog.desc}</p>
                <button
                  className="inline-block mt-auto px-5 py-2 font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
                >
                  {blog.link === "/about" && "Read About"}
                  {blog.link === "/gallery" && "See Gallery"}
                  {blog.link === "/contact" && "Contact Us"}
                  {blog.link === "/annual-maintenance" && "AMC Details"}
                  {blog.link === "/filter-replacement" && "Filter Tips"}
                  {blog.link === "/free-water-testing" && "Book Free Test"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;