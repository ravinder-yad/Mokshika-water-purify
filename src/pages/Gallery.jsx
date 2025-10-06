import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaCameraRetro,
  FaStar,
  FaUserFriends,
  FaTools,
  FaFilter,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import galleryImage from '../assets/image.png'
import galleryImage2 from '../assets/image copy.png'
import galleryImage3 from '../assets/image copy 2.png'
import galleryImage4 from '../assets/image copy 3.png'
import galleryImage5 from '../assets/image copy 4.png'
import galleryImage6 from '../assets/image copy 5.png'
import galleryImage7 from '../assets/image copy 6.png'
import galleryImage8 from '../assets/image copy 7.png'

// --- GALLERY IMAGE DATA (30 unique images, 3 categories) ---
const galleryImages = [
  // RO Installations (10)
  {
    url: "https://www.freshwatersystems.com/cdn/shop/articles/under-sink_RO_system_1024x1024.jpg?v=1718295542",
    category: "RO Installation",
    title: "RO Installation #1",
  },
  {
    url: "https://www.osmotics.co.uk/media/magefan_blog/ro_system_connections2.jpg",
    category: "RO Installation",
    title: "RO Installation #2",
  },
  {
    url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/05/featured-image-water-filter.jpeg.jpg",
    category: "RO Installation",
    title: "RO Installation #3",
  },
  {
    url: "https://5.imimg.com/data5/GC/VS/KC/SELLER-46003865/reverse-osmosis-system-500x500.jpg",
    category: "RO Installation",
    title: "RO Installation #4",
  },
  {
    url: "https://5.imimg.com/data5/SW/SI/MY-4040504/under-sink-ro-water-purifier.jpg",
    category: "RO Installation",
    title: "RO Installation #5",
  },
  {
    url: "https://5.imimg.com/data5/FU/IG/JM/SELLER-6404113/reverse-osmosis-water-filtration-system-250x250.jpg",
    category: "RO Installation",
    title: "RO Installation #6",
  },
  {
    url: "https://5.imimg.com/data5/GC/VS/KC/SELLER-46003865/reverse-osmosis-system-500x500.jpg",
    category: "RO Installation",
    title: "RO Installation #7",
  },
  {
    url: "https://i.pinimg.com/736x/b1/0c/81/b10c81bd52ff0993e8cfe1a0dd49a8b2.jpg",
    category: "RO Installation",
    title: "RO Installation #8",
  },
  {
    url: "https://www.epa.gov/system/files/styles/medium/private/images/2022-01/ws-ro-systems.jpg?itok=qzqPwyu3",
    category: "RO Installation",
    title: "RO Installation #9",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN29IOZvbiqm4wVqiyPcUz5-rTJXp4W-8001_qwppnMLLBA6pCWKACC2UwirxnaEP6CJA&usqp=CAU",
    category: "RO Installation",
    title: "RO Installation #10",
  },

  // Service (10)
  {
    url:[galleryImage],
    category: "Service",
    title: "Service Visit #1",
  },
  {
    url: [galleryImage2],
    category: "Service",
    title: "Service Visit #2",
  },
  {
    url: [galleryImage3],
    category: "Service",
    title: "Service Visit #3",
  },
  {
    url: [galleryImage4],
    category: "Service",
    title: "Service Visit #4",
  },
  {
    url: [galleryImage5],
    category: "Service",
    title: "Service Visit #5",
  },
  {
    url: [galleryImage6],
    category: "Service",
    title: "Service Visit #6",
  },
  {
    url: [galleryImage7],
    category: "Service",
    title: "Service Visit #7",
  },
  {
    url: [galleryImage8],
    category: "Service",
    title: "Service Visit #8",
  },
  {
    url: "https://img.freepik.com/free-vector/tiny-woman-pouring-clean-water-from-faucet-with-mountain-landscape_74855-11024.jpg?semt=ais_incoming&w=740&q=80",
    category: "Service",
    title: "Service Visit #9",
  },
  {
    url: "https://serviceondoors.com/Images/breadcrumb-1.jpg",
    category: "Service",
    title: "Service Visit #10",
  },

  // Happy Customers (10)
  {
    url: "https://www.shutterstock.com/image-photo/healthy-lifestyle-portrait-happy-smiling-600nw-2194577463.jpg",
    category: "Happy Customer",
    title: "Happy Customer #1",
  },
  {
    url: "https://media.istockphoto.com/id/658408448/photo/hydration-is-her-beauty-secret.jpg?s=612x612&w=0&k=20&c=Ue-ZxP-rBq2TQYYz5M41pKTDCo-sdPxT8NCX_2buTTY=",
    category: "Happy Customer",
    title: "Happy Customer #2",
  },
  {
    url: "https://t3.ftcdn.net/jpg/05/07/71/62/360_F_507716236_46BhA7n7RAjgCq5NkbBIZi7cRyQam2Nm.jpg",
    category: "Happy Customer",
    title: "Happy Customer #3",
  },
  {
    url: "https://media.istockphoto.com/id/1372307016/photo/shot-of-a-young-woman-taking-a-break-from-working-out-to-drink-water.jpg?s=612x612&w=0&k=20&c=cdWNquuOodtnRBrJ7x1_sHlD9gnMrIKCEU2SIaKbAnQ=",
    category: "Happy Customer",
    title: "Happy Customer #4",
  },
  {
    url: "https://static.vecteezy.com/system/resources/thumbnails/001/329/883/small_2x/woman-drinking-water-after-workout-in-a-park-free-photo.jpg",
    category: "Happy Customer",
    title: "Happy Customer #5",
  },
  {
    url: "https://media.istockphoto.com/id/1753785400/photo/beautiful-girl-drinking-water.jpg?s=612x612&w=0&k=20&c=eo3m9Oc1Jg7h6qVSvNJKQmAsWX__NFTeGGM1yUMm6S8=",
    category: "Happy Customer",
    title: "Happy Customer #6",
  },
  {
    url: "https://media.istockphoto.com/id/1443517875/photo/beautiful-girl-drinking-water.jpg?s=612x612&w=0&k=20&c=jBprtH_EKgtpHbSvefXjg1w4XXOb_UdaqRj27Xb0ezY=",
    category: "Happy Customer",
    title: "Happy Customer #7",
  },
  {
    url: "https://static.vecteezy.com/system/resources/thumbnails/006/694/292/small/hand-holding-smile-face-block-customer-choose-emoticon-for-user-reviews-service-rating-ranking-customer-review-satisfaction-mood-mental-health-and-feedback-concept-free-photo.jpg",
    category: "Happy Customer",
    title: "Happy Customer #8",
  },
  {
    url: "https://media.istockphoto.com/id/504376996/photo/girl-drinking-water-at-home.jpg?s=612x612&w=0&k=20&c=fU-v4Z7VzZbMtTxcY1zllIrzAT0GSTQDLP_kpTwwk_A=",
    category: "Happy Customer",
    title: "Happy Customer #9",
  },
  {
    url: "https://media.istockphoto.com/id/1357534756/photo/long-blond-hair-girl-holding-glass-of-water.jpg?s=612x612&w=0&k=20&c=Q08xmJAqcWVUNl-fPgZILK8FrYgCiViQUdqdqHxkyjk=",
    category: "Happy Customer",
    title: "Happy Customer #10",
  },
];

const categories = [
  { label: "All", icon: <FaFilter /> },
  { label: "RO Installation", icon: <FaStar /> },
  { label: "Service", icon: <FaTools /> },
  { label: "Happy Customer", icon: <FaUserFriends /> },
];

const WHATSAPP_NUMBER = "919760076957";
const CALL_NUMBER = "+919368885489";

const Gallery = () => {
  const [isLight, setIsLight] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };
  const prevImg = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };
  const nextImg = () => {
    setLightboxIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, lightboxIndex, filteredImages.length]);

  const sectionBg = isLight
    ? "bg-gradient-to-b from-blue-50 via-white to-blue-100"
    : "bg-gradient-to-b from-[#101e33] via-[#15305a] to-[#1d375d]";
  const cardBg = isLight ? "bg-white" : "bg-[#223359]";
  const cardText = isLight ? "text-gray-900" : "text-blue-100";
  const cardShadow = isLight ? "shadow-xl" : "shadow-2xl";
  const buttonActive = isLight
    ? "bg-blue-600 text-white"
    : "bg-blue-500 text-white";
  const buttonInactive = isLight
    ? "bg-white text-blue-700 border border-blue-200"
    : "bg-[#223359] text-blue-100 border border-blue-800";

  return (
    <div className="relative min-h-screen">
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

      {/* HERO */}
      <section
        className={`relative w-full h-[260px] flex items-center justify-center overflow-hidden ${sectionBg}`}
      >
        <img
          src="https://images.pexels.com/photos/45229/drop-of-water-inject-water-drip-45229.jpeg?cs=srgb&dl=pexels-pixabay-45229.jpg&fm=jpg"
          alt="Gallery Hero"
          className="absolute w-full h-full object-cover object-center brightness-75"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg flex items-center justify-center gap-2"
            data-aos="fade-down"
          >
            <FaCameraRetro className="mb-1" /> Gallery
          </h1>
          <p
            className="text-lg text-blue-100 font-medium max-w-2xl mx-auto drop-shadow"
            data-aos="fade-up"
          >
            Explore our work, installations, repairs, and happy customer
            moments!
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className={`py-5 ${sectionBg}`}>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold shadow transition-all duration-200 text-base ${selectedCategory === cat.label ? buttonActive : buttonInactive
                }`}
              onClick={() => setSelectedCategory(cat.label)}
              data-aos="fade-up"
              data-aos-delay={20 * i}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className={`pb-12 px-1 sm:px-4 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 25}
              className={`relative group overflow-hidden rounded-xl ${cardBg} ${cardText} ${cardShadow} cursor-pointer hover:scale-105 transition-transform`}
              style={{ minHeight: "180px" }}
              onClick={() => openLightbox(idx)}
              title={img.title}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                draggable={false}
              />
              <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 py-2 text-white text-xs font-bold uppercase tracking-wide opacity-85">
                {img.title}
              </div>
              <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-[10px] font-semibold opacity-80">
                {img.category}
              </span>
            </div>
          ))}
        </div>
        {filteredImages.length === 0 && (
          <div className="text-center mt-12 text-xl font-semibold text-blue-400">
            No images found for this category.
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed z-[99999] inset-0 bg-black/95 flex items-center justify-center transition-all">
          <button
            className="absolute top-8 right-10 text-white text-4xl p-2 rounded-full hover:bg-white/10 transition"
            onClick={closeLightbox}
            aria-label="Close"
            title="Close"
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-4xl text-white p-3 rounded-full bg-black/40 hover:bg-black/70 shadow transition"
            onClick={prevImg}
            aria-label="Previous"
            title="Previous"
          >
            <FaChevronLeft />
          </button>
          <div className="max-w-full max-h-full flex flex-col items-center">
            <img
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].title}
              className="max-h-[70vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-blue-200"
              draggable={false}
            />
            <div className="mt-4 text-white text-lg font-extrabold tracking-wide">
              {filteredImages[lightboxIndex].title}
            </div>
            <div className="mt-1 text-blue-200 text-xs font-semibold uppercase tracking-wider">
              {filteredImages[lightboxIndex].category}
            </div>
          </div>
          <button
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-4xl text-white p-3 rounded-full bg-black/40 hover:bg-black/70 shadow transition"
            onClick={nextImg}
            aria-label="Next"
            title="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;