// import React, { useState, useEffect } from "react";
// import {
//   FaWhatsapp,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaUser,
//   FaRegCommentDots,
//   FaPaperPlane,
// } from "react-icons/fa";
// import { useForm, ValidationError } from "@formspree/react";

// const WHATSAPP_NUMBER = "919760076957";
// const CALL_NUMBER = "+919368885489";
// const EMAIL = "mokshikawaterpurifyagra@gmail.com";

// const Contact = () => {
//   // ---- Formspree hook ---- //
//   const [state, handleSubmit] = useForm("xdkwndrp");
//   const [isLight, setIsLight] = useState(false);

//   useEffect(() => {
//     const checkTheme = () => {
//       setIsLight(document.documentElement.classList.contains("light-theme"));
//     };
//     checkTheme();
//     const obs = new MutationObserver(checkTheme);
//     obs.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });
//     return () => obs.disconnect();
//   }, []);

//   // ---- Styling shortcuts ---- //
//   const sectionBg = isLight ? "bg-blue-50" : "bg-[#14213d]";
//   const cardBg = isLight ? "bg-white" : "bg-[#223359]";
//   const cardText = isLight ? "text-gray-900" : "text-blue-100";
//   const inputBg = isLight ? "bg-white" : "bg-[#223359]";
//   const inputText = isLight ? "text-gray-900" : "text-blue-100";
//   const buttonCls = isLight
//     ? "bg-blue-600 text-white hover:bg-blue-700"
//     : "bg-blue-500 text-white hover:bg-blue-700";

//   return (
//     <div className="min-h-screen md:min-h-[70vh] flex flex-col">
//       {/* HERO BANNER */}
//       <section
//         className={`relative w-full h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center overflow-hidden ${sectionBg}`}
//       >
//         <img
//           src="https://png.pngtree.com/thumb_back/fh260/background/20241128/pngtree-a-close-up-of-water-capturing-the-pure-clarity-and-fluidity-image_16701475.jpg"
//           alt="Contact Hero"
//           className="absolute w-full h-full object-cover object-center brightness-80"
//           draggable={false}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//         <div className="relative z-10 text-center px-4 w-full max-w-5xl">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg flex items-center justify-center gap-2">
//             <FaEnvelope className="mb-1 size-5 sm:size-6 md:size-7" />
//             <span>Contact Us</span>
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg text-blue-100 font-medium max-w-2xl mx-auto drop-shadow">
//             Get in touch for service, queries or feedback. We are always here
//             for you!
//           </p>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <section className={`flex flex-col md:flex-row md:items-start py-6 md:py-10 px-4 sm:px-5 md:px-8 flex-1 ${sectionBg}`}>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//           {/* CONTACT FORM */}
//           <div className={`p-5 sm:p-6 rounded-xl md:rounded-2xl shadow-xl ${cardBg} ${cardText}`}>
//             <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
//               <FaRegCommentDots className="size-5" />
//               <span>Send a Message</span>
//             </h2>

//             {state.succeeded ? (
//               <p>Thanks for your message!</p>
//             ) : (
//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <div className="flex items-center gap-3">
//                   <FaUser className="size-4 flex-shrink-0" />
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Your Name"
//                     className={`flex-1 rounded-md px-4 py-3 outline-none ${inputBg} ${inputText} shadow text-base`}
//                     required
//                     aria-label="Your Name"
//                   />
//                   <ValidationError prefix="Name" field="name" errors={state.errors} />
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaEnvelope className="size-4 flex-shrink-0" />
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Your Email"
//                     className={`flex-1 rounded-md px-4 py-3 outline-none ${inputBg} ${inputText} shadow text-base`}
//                     required
//                     aria-label="Your Email"
//                   />
//                   <ValidationError prefix="Email" field="email" errors={state.errors} />
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <FaRegCommentDots className="mt-3 size-4 flex-shrink-0" />
//                   <textarea
//                     id="message"
//                     name="message"
//                     placeholder="Your Message / Query"
//                     className={`flex-1 rounded-md px-4 py-3 outline-none ${inputBg} ${inputText} shadow min-h-[120px] text-base`}
//                     required
//                     aria-label="Your Message"
//                   />
//                   <ValidationError prefix="Message" field="message" errors={state.errors} />
//                 </div>

//                 <button
//                   type="submit"
//                   className={`mt-2 px-6 py-3 rounded-full font-bold text-lg shadow ${buttonCls} flex items-center gap-2 justify-center`}
//                   disabled={state.submitting}
//                   aria-label="Send Message"
//                 >
//                   <FaPaperPlane
//                     className={state.submitting ? "animate-pulse size-5" : "size-5"}
//                   />
//                   {state.submitting ? "Sending..." : "Send Message"}
//                 </button>
//               </form>
//             )}
//           </div>

//           {/* CONTACT DETAILS + MAP */}
//           <div className="flex flex-col gap-6">
//             <div className={`p-5 sm:p-6 rounded-xl md:rounded-2xl shadow-xl ${cardBg} ${cardText}`}>
//               <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
//                 <FaMapMarkerAlt className="size-5" />
//                 <span>Get in Touch</span>
//               </h2>
//               <div className="flex flex-col gap-3 text-base font-medium">
//                 <div className="flex items-start gap-3">
//                   <FaMapMarkerAlt className="text-blue-400 mt-1 size-5 flex-shrink-0" />
//                   <span>
//                     34/95-s/34-b Shambhu Palace, Sanik Vihar, Deori Road, Agra,
//                     282001, India
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-blue-400 size-5 flex-shrink-0" />
//                   <a href={`tel:${CALL_NUMBER}`} className="hover:underline text-blue-500">
//                     +91 9368885489
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FaEnvelope className="text-blue-400 size-5 flex-shrink-0" />
//                   <a
//                     href={`mailto:${EMAIL}`}
//                     className="hover:underline text-blue-500 break-all"
//                   >
//                     {EMAIL}
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FaWhatsapp className="text-green-500 size-5 flex-shrink-0" />
//                   <a
//                     href={`https://wa.me/${WHATSAPP_NUMBER}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline text-green-700"
//                   >
//                     WhatsApp Us
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl h-64 sm:h-72 md:h-80">
//               <iframe
//                 title="Google Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113576.23646282289!2d77.95024382167967!3d27.17685599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1726587347936!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FLOATING BUTTONS */}
//       <div className="fixed z-50 right-4 bottom-6 flex flex-col items-end gap-3 md:gap-4">
//         <a
//           href={`https://wa.me/${WHATSAPP_NUMBER}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 bg-green-500 text-white hover:bg-green-600"
//           aria-label="WhatsApp"
//         >
//           <FaWhatsapp size={22} />
//         </a>
//         <a
//           href={`tel:${CALL_NUMBER}`}
//           className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${isLight
//               ? "bg-blue-500 text-white hover:bg-blue-700"
//               : "bg-blue-700 text-white hover:bg-blue-900"
//             }`}
//           aria-label="Call"
//         >
//           <FaPhoneAlt size={18} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Contact;



// import React, { useState, useEffect } from "react";
// import {
//   FaWhatsapp,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaUser,
//   FaRegCommentDots,
//   FaPaperPlane,
// } from "react-icons/fa";
// import { useForm, ValidationError } from "@formspree/react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const WHATSAPP_NUMBER = "919760076957";
// const CALL_NUMBER = "+919368885489";
// const EMAIL = "mokshikawaterpurifyagra@gmail.com";

// const Contact = () => {
//   // ---- Formspree hook ---- //
//   const [state, handleSubmit] = useForm("xdkwndrp");
//   const [isLight, setIsLight] = useState(false);

//   useEffect(() => {
//     // Initialize AOS animations
//     AOS.init({ duration: 800, once: true, offset: 50 });

//     const checkTheme = () => {
//       setIsLight(document.documentElement.classList.contains("light-theme"));
//     };
//     checkTheme();
//     const obs = new MutationObserver(checkTheme);
//     obs.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });
//     return () => obs.disconnect();
//   }, []);

//   // ---- Styling shortcuts ---- //
//   const sectionBg = isLight ? "bg-blue-50" : "bg-[#14213d]";
//   const cardBg = isLight ? "bg-white" : "bg-[#223359]";
//   const cardText = isLight ? "text-gray-900" : "text-blue-100";
//   const inputBg = isLight ? "bg-white" : "bg-[#223359]";
//   const inputText = isLight ? "text-gray-900" : "text-blue-100";
//   const buttonCls = isLight
//     ? "bg-blue-600 text-white hover:bg-blue-700"
//     : "bg-blue-500 text-white hover:bg-blue-700";

//   return (
//     <div className="min-h-screen md:min-h-[70vh] flex flex-col">
//       {/* HERO BANNER */}
//       <section
//         className={`relative w-full h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center overflow-hidden ${sectionBg}`}
//       >
//         <img
//           src="https://png.pngtree.com/thumb_back/fh260/background/20241128/pngtree-a-close-up-of-water-capturing-the-pure-clarity-and-fluidity-image_16701475.jpg"
//           alt="Contact Hero"
//           className="absolute w-full h-full object-cover object-center brightness-80"
//           draggable={false}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//         <div className="relative z-10 text-center px-4 w-full max-w-5xl">
//           <h1
//             className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg flex items-center justify-center gap-2"
//             data-aos="fade-down"
//             data-aos-delay="100"
//           >
//             <FaEnvelope className="mb-1 size-5 sm:size-6 md:size-7" />
//             <span>Contact Us</span>
//           </h1>
//           <p
//             className="text-sm sm:text-base md:text-lg text-blue-100 font-medium max-w-2xl mx-auto drop-shadow"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Get in touch for service, queries or feedback. We are always here
//             for you!
//           </p>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <section className={`flex flex-col md:flex-row md:items-start py-6 md:py-10 px-4 sm:px-5 md:px-8 flex-1 ${sectionBg}`}>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//           {/* CONTACT FORM */}
//           <div
//             className={`p-5 sm:p-6 rounded-xl md:rounded-2xl shadow-xl ${cardBg} ${cardText}`}
//             data-aos="fade-right"
//             data-aos-delay="300"
//           >
//             <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
//               <FaRegCommentDots className="size-5" />
//               <span>Send a Message</span>
//             </h2>

//             {state.succeeded ? (
//               <p
//                 className="text-green-600 font-semibold text-lg text-center py-4"
//                 data-aos="zoom-in"
//               >
//                 ✅ Thanks for your message! We'll get back to you soon.
//               </p>
//             ) : (
//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <div
//                   className="flex items-center gap-3"
//                   data-aos="fade-up"
//                   data-aos-delay="100"
//                 >
//                   <FaUser className="size-4 flex-shrink-0" />
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Your Name"
//                     className={`flex-1 rounded-md px-4 py-3 outline-none ${inputBg} ${inputText} shadow text-base`}
//                     required
//                     aria-label="Your Name"
//                   />
//                   <ValidationError prefix="Name" field="name" errors={state.errors} />
//                 </div>

//                 <div
//                   className="flex items-center gap-3"
//                   data-aos="fade-up"
//                   data-aos-delay="150"
//                 >
//                   <FaEnvelope className="size-4 flex-shrink-0" />
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Your Email"
//                     className={`flex-1 rounded-md px-4 py-3 outline-none ${inputBg} ${inputText} shadow text-base`}
//                     required
//                     aria-label="Your Email"
//                   />
//                   <ValidationError prefix="Email" field="email" errors={state.errors} />
//                 </div>

//                 <div
//                   className="flex items-start gap-3"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   <FaRegCommentDots className="mt-3 size-4 flex-shrink-0" />
//                   <textarea
//                     id="message"
//                     name="message"
//                     placeholder="Your Message / Query"
//                     className={`flex-1 rounded-md px-4 py-3 outline-none ${inputBg} ${inputText} shadow min-h-[120px] text-base`}
//                     required
//                     aria-label="Your Message"
//                   />
//                   <ValidationError prefix="Message" field="message" errors={state.errors} />
//                 </div>

//                 <button
//                   type="submit"
//                   className={`mt-2 px-6 py-3 rounded-full font-bold text-lg shadow ${buttonCls} flex items-center gap-2 justify-center`}
//                   disabled={state.submitting}
//                   aria-label="Send Message"
//                   data-aos="zoom-in"
//                   data-aos-delay="250"
//                 >
//                   <FaPaperPlane
//                     className={state.submitting ? "animate-pulse size-5" : "size-5"}
//                   />
//                   {state.submitting ? "Sending..." : "Send Message"}
//                 </button>
//               </form>
//             )}
//           </div>

//           {/* CONTACT DETAILS + MAP */}
//           <div className="flex flex-col gap-6">
//             <div
//               className={`p-5 sm:p-6 rounded-xl md:rounded-2xl shadow-xl ${cardBg} ${cardText}`}
//               data-aos="fade-left"
//               data-aos-delay="400"
//             >
//               <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
//                 <FaMapMarkerAlt className="size-5" />
//                 <span>Get in Touch</span>
//               </h2>
//               <div className="flex flex-col gap-3 text-base font-medium">
//                 <div
//                   className="flex items-start gap-3"
//                   data-aos="fade-up"
//                   data-aos-delay="100"
//                 >
//                   <FaMapMarkerAlt className="text-blue-400 mt-1 size-5 flex-shrink-0" />
//                   <span>
//                     34/95-s/34-b Shambhu Palace, Sanik Vihar, Deori Road, Agra,
//                     282001, India
//                   </span>
//                 </div>
//                 <div
//                   className="flex items-center gap-3"
//                   data-aos="fade-up"
//                   data-aos-delay="150"
//                 >
//                   <FaPhoneAlt className="text-blue-400 size-5 flex-shrink-0" />
//                   <a href={`tel:${CALL_NUMBER}`} className="hover:underline text-blue-500">
//                     +91 9368885489
//                   </a>
//                 </div>
//                 <div
//                   className="flex items-center gap-3"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   <FaEnvelope className="text-blue-400 size-5 flex-shrink-0" />
//                   <a
//                     href={`mailto:${EMAIL}`}
//                     className="hover:underline text-blue-500 break-all"
//                   >
//                     {EMAIL}
//                   </a>
//                 </div>
//                 <div
//                   className="flex items-center gap-3"
//                   data-aos="fade-up"
//                   data-aos-delay="250"
//                 >
//                   <FaWhatsapp className="text-green-500 size-5 flex-shrink-0" />
//                   <a
//                     href={`https://wa.me/${WHATSAPP_NUMBER}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline text-green-700"
//                   >
//                     WhatsApp Us
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl h-64 sm:h-72 md:h-80"
//               data-aos="zoom-in"
//               data-aos-delay="500"
//             >
//               <iframe
//                 title="Google Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113576.23646282289!2d77.95024382167967!3d27.17685599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1726587347936!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FLOATING BUTTONS */}
//       <div className="fixed z-50 right-4 bottom-6 flex flex-col items-end gap-3 md:gap-4">
//         <a
//           href={`https://wa.me/${WHATSAPP_NUMBER}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 bg-green-500 text-white hover:bg-green-600"
//           aria-label="WhatsApp"
//           data-aos="zoom-in"
//           data-aos-delay="600"
//         >
//           <FaWhatsapp size={22} />
//         </a>
//         <a
//           href={`tel:${CALL_NUMBER}`}
//           className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${isLight
//             ? "bg-blue-500 text-white hover:bg-blue-700"
//             : "bg-blue-700 text-white hover:bg-blue-900"
//             }`}
//           aria-label="Call"
//           data-aos="zoom-in"
//           data-aos-delay="650"
//         >
//           <FaPhoneAlt size={18} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaRegCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import AOS from "aos";
import "aos/dist/aos.css";

const WHATSAPP_NUMBER = "919760076957";
const CALL_NUMBER = "+919368885489";
const EMAIL = "mokshikawaterpurifyagra@gmail.com";

const Contact = () => {
  // ---- Formspree hook ---- //
  const [state, handleSubmit] = useForm("xdkwndrp");
  const [isLight, setIsLight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Initialize AOS animations with mobile-friendly settings
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: window.innerWidth < 768 // Disable animations on mobile if needed
    });

    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light-theme"));
    };
    
    checkTheme();
    const obs = new MutationObserver(checkTheme);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => {
      obs.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // ---- Styling shortcuts ---- //
  const sectionBg = isLight ? "bg-blue-50" : "bg-[#14213d]";
  const cardBg = isLight ? "bg-white" : "bg-[#223359]";
  const cardText = isLight ? "text-gray-900" : "text-blue-100";
  const inputBg = isLight ? "bg-white" : "bg-[#223359]";
  const inputText = isLight ? "text-gray-900" : "text-blue-100";
  const buttonCls = isLight
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-blue-500 text-white hover:bg-blue-700";

  // Animation classes - simplified for mobile
  const getAnimationProps = (animation, delay = 0) => {
    if (isMobile) {
      return {}; // No animations on mobile
    }
    return {
      "data-aos": animation,
      "data-aos-delay": delay
    };
  };

  return (
    <div className="min-h-screen md:min-h-[70vh] flex flex-col">
      {/* HERO BANNER */}
      <section
        className={`relative w-full h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center overflow-hidden ${sectionBg}`}
      >
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20241128/pngtree-a-close-up-of-water-capturing-the-pure-clarity-and-fluidity-image_16701475.jpg"
          alt="Contact Hero"
          className="absolute w-full h-full object-cover object-center brightness-80"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 text-center px-4 w-full max-w-5xl">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg flex items-center justify-center gap-2"
            {...getAnimationProps("fade-down", 100)}
          >
            <FaEnvelope className="mb-1 size-5 sm:size-6 md:size-7" />
            <span>Contact Us</span>
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg text-blue-100 font-medium max-w-2xl mx-auto drop-shadow"
            {...getAnimationProps("fade-up", 200)}
          >
            Get in touch for service, queries or feedback. We are always here
            for you!
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className={`flex flex-col md:flex-row md:items-start py-6 md:py-10 px-4 sm:px-5 md:px-8 flex-1 ${sectionBg}`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {/* CONTACT FORM */}
          <div
            className={`p-5 sm:p-6 rounded-xl md:rounded-2xl shadow-xl ${cardBg} ${cardText}`}
            {...getAnimationProps("fade-right", 300)}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
              <FaRegCommentDots className="size-5" />
              <span>Send a Message</span>
            </h2>

            {state.succeeded ? (
              <p
                className="text-green-600 font-semibold text-lg text-center py-4"
                {...getAnimationProps("zoom-in")}
              >
                ✅ Thanks for your message! We'll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div
                  className="flex items-center gap-3"
                  {...getAnimationProps("fade-up", 100)}
                >
                  <FaUser className="size-4 flex-shrink-0" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className={`flex-1 rounded-md px-4 py-3 outline-none ${inputBg} ${inputText} shadow text-base w-full`}
                    required
                    aria-label="Your Name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div
                  className="flex items-center gap-3"
                  {...getAnimationProps("fade-up", 150)}
                >
                  <FaEnvelope className="size-4 flex-shrink-0" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className={`flex-1 rounded-md px-4 py-3 outline-none ${inputBg} ${inputText} shadow text-base w-full`}
                    required
                    aria-label="Your Email"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div
                  className="flex items-start gap-3"
                  {...getAnimationProps("fade-up", 200)}
                >
                  <FaRegCommentDots className="mt-3 size-4 flex-shrink-0" />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message / Query"
                    className={`flex-1 rounded-md px-4 py-3 outline-none ${inputBg} ${inputText} shadow min-h-[120px] text-base w-full`}
                    required
                    aria-label="Your Message"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  className={`mt-2 px-6 py-3 rounded-full font-bold text-lg shadow ${buttonCls} flex items-center gap-2 justify-center w-full sm:w-auto`}
                  disabled={state.submitting}
                  aria-label="Send Message"
                  {...getAnimationProps("zoom-in", 250)}
                >
                  <FaPaperPlane
                    className={state.submitting ? "animate-pulse size-5" : "size-5"}
                  />
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* CONTACT DETAILS + MAP */}
          <div className="flex flex-col gap-6">
            <div
              className={`p-5 sm:p-6 rounded-xl md:rounded-2xl shadow-xl ${cardBg} ${cardText}`}
              {...getAnimationProps("fade-left", 400)}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="size-5" />
                <span>Get in Touch</span>
              </h2>
              <div className="flex flex-col gap-3 text-base font-medium">
                <div
                  className="flex items-start gap-3"
                  {...getAnimationProps("fade-up", 100)}
                >
                  <FaMapMarkerAlt className="text-blue-400 mt-1 size-5 flex-shrink-0" />
                  <span className="break-words">
                    34/95-s/34-b Shambhu Palace, Sanik Vihar, Deori Road, Agra,
                    282001, India
                  </span>
                </div>
                <div
                  className="flex items-center gap-3"
                  {...getAnimationProps("fade-up", 150)}
                >
                  <FaPhoneAlt className="text-blue-400 size-5 flex-shrink-0" />
                  <a href={`tel:${CALL_NUMBER}`} className="hover:underline text-blue-500 break-all">
                    +91 9368885489
                  </a>
                </div>
                <div
                  className="flex items-center gap-3"
                  {...getAnimationProps("fade-up", 200)}
                >
                  <FaEnvelope className="text-blue-400 size-5 flex-shrink-0" />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="hover:underline text-blue-500 break-all"
                  >
                    {EMAIL}
                  </a>
                </div>
                <div
                  className="flex items-center gap-3"
                  {...getAnimationProps("fade-up", 250)}
                >
                  <FaWhatsapp className="text-green-500 size-5 flex-shrink-0" />
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-green-700 break-all"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl h-64 sm:h-72 md:h-80 w-full"
              {...getAnimationProps("zoom-in", 500)}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113576.23646282289!2d77.95024382167967!3d27.17685599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1726587347936!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <div className="fixed z-50 right-4 bottom-6 flex flex-col items-end gap-3 md:gap-4">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 bg-green-500 text-white hover:bg-green-600"
          aria-label="WhatsApp"
          {...getAnimationProps("zoom-in", 600)}
        >
          <FaWhatsapp size={18} className="sm:size-5" />
        </a>
        <a
          href={`tel:${CALL_NUMBER}`}
          className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
            isLight
              ? "bg-blue-500 text-white hover:bg-blue-700"
              : "bg-blue-700 text-white hover:bg-blue-900"
          }`}
          aria-label="Call"
          {...getAnimationProps("zoom-in", 650)}
        >
          <FaPhoneAlt size={16} className="sm:size-4" />
        </a>
      </div>
    </div>
  );
};

export default Contact;