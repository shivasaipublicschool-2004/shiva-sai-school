// import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ecoImg from "./assets/gallery/eco/eco.jpeg";
import eco1 from "./assets/gallery/eco/eco1.jpeg";

import activityImg from "./assets/gallery/activity/activity.mp4";
import activityVideo2 from "./assets/gallery/activity/activity1.mp4";

import playgroundImg from "./assets/gallery/playground/playground.jpeg";
import playground1 from "./assets/gallery/playground/playground1.jpeg";

import affordable1 from "./assets/gallery/affordable/affordable.jpeg";

import campus1 from "./assets/gallery/campus/campus1.jpeg";
import campus2 from "./assets/gallery/campus/campus2.jpeg";
import campus3 from "./assets/gallery/campus/campus3.jpeg";
import campus4 from "./assets/gallery/campus/campus4.jpeg";
import campus5 from "./assets/gallery/campus/campus5.jpeg";
import campus6 from "./assets/gallery/campus/campus6.jpeg";

const ecoGallery = [ecoImg, eco1];

const playgroundGallery = [playgroundImg, playground1];

const activityGallery = [activityImg, activityVideo2];

const affordableGallery = [affordable1];

export default function ShivaSaiSchoolWebsite() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="SHIVA SAI SCHOOL"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold tracking-wide text-[#0b1f3a]">
                SHIVA SAI SCHOOL
              </h1>
              <p className="text-sm text-slate-600">
                Bridging Knowledge and Wisdom
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="font-medium hover:text-[#c9a227]">
              Home
            </a>

            <div className="group relative">
              <button className="font-medium hover:text-[#c9a227]">
                MENU
              </button>

              <div className="absolute right-0 mt-3 min-w-[220px] rounded-2xl border border-slate-200 bg-white p-3 shadow-xl opacity-0 invisible transition-all duration-300 group-hover:visible group-hover:opacity-100">
               {[
                  { name: "About School", link: "#about" },
                  { name: "Academics", link: "#academics" },
                  { name: "Facilities", link: "#facilities" },
                  { name: "Gallery", link: "#gallery" },
                  { name: "Contact", link: "#contact" },
                ].map((item) => (
                <a
                key={item.name}
                href={item.link}
                className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-100"
                >
             {item.name}
           </a>
          ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Floating News */}
      <div className="sticky top-[82px] z-40 overflow-hidden bg-[#0b1f3a] py-2 text-white">
        <div className="animate-marquee whitespace-nowrap text-sm font-medium">
          Admissions Open for this Year     • Transport Facility Available     • Intensive Navodaya Coaching 
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex h-[75vh] items-center overflow-hidden"
      >
        <img
          src="/hero-school.jpg"
          alt="School Campus"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/80 to-black/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm backdrop-blur">
              Since 2004
            </span>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Bridging Knowledge and Wisdom
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
              Providing quality education since 2004 with strong discipline,
              modern learning, and a safe academic environment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#c9a227] px-8 py-4 font-semibold text-black transition hover:scale-105">
                Admissions Open
              </button>

              <button className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white hover:text-black">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className="bg-[#fdfbf7] py-16">
        <div className="mx-auto max-w-6xl px-6">

         <div className="rounded-3xl border border-yellow-200 bg-white shadow-2xl overflow-hidden">

         {/* Header */}
          <div className="flex items-center gap-3 bg-[#0b1f3a] px-6 py-4 text-white">
           <i className="fas fa-bullhorn text-yellow-400 text-2xl"></i>

            <h2 className="text-2xl font-bold tracking-wide">
              School Notice Board
           </h2>
         </div>

      {/* Animated Notices */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-b from-white to-slate-100">

        <div className="animate-marquee space-y-6 px-6 py-6 text-lg font-semibold text-slate-700">

          <p>📢 Admissions Open for Academic Year 2026–27</p>

          <p>📚 Special Navodaya Coaching Classes Available</p>

        </div>

      </div>

    </div>
  </div>
</section>

      {/* Principal Section */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="text-center">
            <img
              src="/principal.jpg"
              alt="Principal"
              className="mx-auto h-[380px] w-[300px] rounded-3xl object-cover shadow-2xl"
            />

            <h2 className="mt-6 text-2xl font-bold text-[#0b1f3a]">
              A. Bhaira goud
            </h2>

            <p className="mt-2 text-[#c9a227]">
              M.A. (English), B.Ed.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
              Principal's Message
            </p>

            <h3 className="text-4xl font-bold text-[#0b1f3a]">
              Nurturing Excellence Through Education
            </h3>

            <p className="mt-6 leading-8 text-slate-700">
              At SHIVA SAI SCHOOL, we believe education is the foundation for a
              successful and responsible future. Our mission is to create a
              disciplined, inspiring, and academically strong environment where
              every child can grow with confidence and values.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              We focus on holistic development through modern teaching methods,
              activity-based learning, and personal attention for every student.
            </p>
          </div>
        </div>
    </section>

       {/* Highlights */}
       <section id="academics" className="bg-[#0b1f3a] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              'Computer Lab',
              'Intensive Navodaya Coaching',
              'Indoor & Outdoor Sports',
               'Transport Facility',
                 'CCTV Security',
              '20+ Years of Experience',
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
     
      {/* Why Choose Us */}
      <section id="facilities" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0b1f3a]">
              Academic Excellence With Strong Values
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

  {/* Eco */}
  <div
    className="cursor-pointer rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/20"
  >
    <img
     src={ecoImg}
      className="mb-4 h-40 w-full rounded-2xl object-cover"
    />

    <h3 className="text-xl font-bold text-[#0b1f3a]">
      Eco-Friendly Surroundings
    </h3>
  </div>

  {/* Activity */}
  <div
    className="cursor-pointer rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/20"
  >
   <video
  src={activityImg}
  className="mb-4 h-40 w-full rounded-2xl object-cover"
  autoPlay
  muted
  loop
  playsInline
/>

    <h3 className="text-xl font-bold text-[#0b1f3a]">
      Activity-Based Learning
    </h3>
  </div>

  {/* Affordable */}
  <div
    className="cursor-pointer rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/20"
  >
    <img
     src={affordable1}
     alt="Affordable"
     className="mb-4 h-40 w-full rounded-2xl object-cover"
     />

    <h3 className="text-xl font-bold text-[#0b1f3a]">
      Affordable Education
    </h3>
  </div>

  {/* Playground */}
  <div
    className="cursor-pointer rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/20"
  >
    <img
      src={playground1}
      alt="Playground"
      className="mb-4 h-40 w-full rounded-2xl object-cover"
    />

    <h3 className="text-xl font-bold text-[#0b1f3a]">
      Spacious Playground
    </h3>
  </div>

  </div>
        </div>
      </section>

    {/* Gallery */}
    <section id="gallery" className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-6">  
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
        Gallery
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#0b1f3a]">
        School Campus Gallery
      </h2>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      <img
        src={campus1}
        alt="Eco"
        className="h-72 w-full rounded-3xl object-cover shadow-xl transition duration-300 hover:scale-105"
      />

      <img
        src={campus2}
        className="h-72 w-full rounded-3xl object-cover shadow-xl transition duration-300 hover:scale-105"
      />

      <img
        src={campus3}
        alt="Playground"
        className="h-72 w-full rounded-3xl object-cover shadow-xl transition duration-300 hover:scale-105"
      />

      <img
        src={campus4}
        alt="Playground"
        className="h-72 w-full rounded-3xl object-cover shadow-xl transition duration-300 hover:scale-105"
      />

      <img
        src={campus5}
        alt="Affordable"
        className="h-72 w-full rounded-3xl object-cover shadow-xl transition duration-300 hover:scale-105"
      />
      <img
        src={campus6}
        alt="Campus"
        className="h-72 w-full rounded-3xl object-cover shadow-xl transition duration-300 hover:scale-105"
      />

     </div>
   </div>
 </section>     
 
  {/* FAQ */}
        <section className="bg-[#fdfbf7] py-24">  
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0b1f3a]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {[
              'What classes are available?',
              'Is transport available?',
              'What is the admission process?',
              'What are the school timings?',
              'Is English medium available?',
            ].map((faq) => (
              <details
                key={faq}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[#0b1f3a]">
                  {faq}
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                       {faq === "What classes are available?" &&
                          "We offer classes from Nursery to 7th class with experienced faculty and activity-based learning."}

                       {faq === "Is transport available?" &&
                          "Yes, school transport facility is available for student convenience."}

                       {faq === "What is the admission process?" &&
                         "Parents can visit the school campus, collect the admission form, submit required documents, and complete the registration process."}

                       {faq === "What are the school timings?" &&
                         "School timings are Monday to Saturday from 10:00 AM to 4:30 PM."}
      
                       {faq === "Is English medium available?" &&
                         "Yes, SHIVA SAI SCHOOL provides quality English medium education with strong academic values."}
                   </p>
              </details>
            ))}
          </div>
        </div>
      </section> 
      
      {/* Contact */}
      <section id="contact" className="bg-[#0b1f3a] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Get In Touch With SHIVA SAI SCHOOL
            </h2>

            <div className="mt-10 space-y-5 text-lg text-slate-200">

  <p className="flex items-center gap-3">
    <i className="fas fa-map-marker-alt text-red-500 text-xl w-6"></i>
    Ramareddy, Kamareddy district, Telangana
  </p>

 <p className="flex items-center gap-3">
  <i className="fas fa-phone text-green-400 text-xl w-6 rotate-0"></i>
  <span>9912972535</span>
</p>

  <p className="flex items-center gap-3">
    <i className="fas fa-envelope text-blue-400 text-xl w-6"></i>
    shivasaipublicschool1@gmail.com
  </p>
  
 <p className="flex items-center gap-3">
  <i className="fab fa-instagram text-pink-500 text-xl w-6"></i>

  <a
    href="https://instagram.com/shivasaipublicschool_2004"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-400 transition"
  >
    Instagram: @shivasaipublicschool_2004
  </a>
</p>

</div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
  href="https://wa.me/919912972535"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-green-500 px-6 py-3 font-semibold text-white inline-flex items-center gap-2 hover:bg-green-600 transition-all duration-300 shadow-lg"
>
  <i className="fab fa-whatsapp text-xl"></i>
  WhatsApp
</a>
<a
  href="tel:+919912972535"
  className="rounded-full border border-white/30 px-6 py-3 font-semibold inline-flex items-center gap-2"
>
  <i className="fas fa-phone"></i>
  Call Now
</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur">
            <div className="flex h-full min-h-[350px] items-center justify-center text-center text-slate-200">
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3785.5548092327517!2d78.373791!3d18.413102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI0JzQ3LjIiTiA3OMKwMjInMjUuNyJF!5e0!3m2!1sen!2sin!4v1779010084515!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#081426] py-8 text-center text-sm text-slate-400">
        © 2026 SHIVA SAI SCHOOL. All Rights Reserved.
      </footer>

      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 18s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }

          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}
