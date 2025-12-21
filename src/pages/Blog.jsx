import React, { useState, useEffect } from "react";
import { FaNewspaper, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const blogs = [
    {
        title: "How to Choose the Best RO in 2025?",
        desc: "Our expert guide helps you pick the right purifier for your family’s unique needs. We compare TDS levels, water sources, and maintenance costs.",
        date: "Dec 10, 2024",
        link: "/about",
    },
    {
        title: "Why Regular RO Maintenance is Important",
        desc: "Learn the health and savings benefits of annual RO maintenance. Ignoring service can lead to contaminated water and costly repairs.",
        date: "Nov 22, 2024",
        link: "/annual-maintenance",
    },
    {
        title: "Customer Story: Clean Water Changed Our Life",
        desc: "Read how RO impacted an Agra family's health. Better digestion, skin health, and peace of mind.",
        date: "Oct 15, 2024",
        link: "/gallery",
    },
    {
        title: "RO vs UV vs UF: Which is Better?",
        desc: "Detailed comparison so you can make the smartest choice. Understanding the differences based on your input water quality.",
        date: "Sep 05, 2024",
        link: "/about",
    },
    {
        title: "5 Tips for RO Filter Life",
        desc: "Simple things you can do at home for longer filter life. Pre-filter cleaning and timely checks.",
        date: "Aug 20, 2024",
        link: "/filter-replacement",
    },
    {
        title: "Contact Us for Free Water Testing",
        desc: "Book a free water quality check today. Know what you are drinking before you buy.",
        date: "July 12, 2024",
        link: "/free-water-testing",
    },
];

const WHATSAPP_NUMBER = "919760076957";
const CALL_NUMBER = "+919368885489";

const Blog = () => {
    const [isLight, setIsLight] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
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

    const sectionBg = isLight ? "bg-gray-50" : "bg-[#14213d]";
    const cardBg = isLight ? "bg-white" : "bg-[#223359]";
    const cardText = isLight ? "text-gray-800" : "text-blue-100";
    const sectionTitle = isLight
        ? "text-3xl md:text-4xl font-bold text-blue-800 mb-6"
        : "text-3xl md:text-4xl font-bold text-blue-200 mb-6";

    return (
        <div className={`min-h-screen pt-20 ${sectionBg} transition-colors duration-500`}>
            <Helmet>
                <title>Blog - Water Purification Tips | Mokshika Water Purifier</title>
                <meta
                    name="description"
                    content="Read our latest articles on RO maintenance, water purification tips, and healthy living. Stay informed with Mokshika Water Purifier."
                />
                <link rel="canonical" href="https://www.mokshikawaterpurifier.co.in/blog" />
            </Helmet>

            {/* FLOATING BUTTONS */}
            <div className="fixed z-50 right-4 bottom-6 flex flex-col items-end gap-3 md:gap-4">
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 bg-green-500 text-white hover:bg-green-600"
                    aria-label="WhatsApp"
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
                >
                    <FaPhoneAlt size={18} />
                </a>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="text-center mb-12">
                    <h1 className={sectionTitle} data-aos="fade-down">
                        Latest Updates & Resources
                    </h1>
                    <p className={`text-lg max-w-2xl mx-auto ${isLight ? "text-gray-600" : "text-blue-200"}`} data-aos="fade-up">
                        Expert advice, maintenance tips, and news about water purification to keep your family safe and healthy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <article
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            className={`flex flex-col p-6 rounded-2xl shadow-lg cursor-pointer ${cardBg} ${cardText} hover:scale-105 transition-transform duration-300`}
                            onClick={() => navigate(blog.link)}
                        >
                            <div className="flex items-center gap-2 mb-4 text-sm font-semibold opacity-70">
                                <FaNewspaper /> <span>{blog.date}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-3 hover:text-blue-500 transition-colors">
                                {blog.title}
                            </h2>
                            <p className="mb-6 opacity-90 flex-grow leading-relaxed">
                                {blog.desc}
                            </p>
                            <button className="self-start text-blue-500 font-semibold hover:underline">
                                Read More &rarr;
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
