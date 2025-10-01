import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      "Got my car ceramic coated and polished using AB and the service and quality of work was immaculate. Has been maintained twice a month since",
    author: "Kory",
  },
  {
    quote:
      "Unbelievable attention to detail and superior quality of finish. The car came out absolutely immaculate, as if it was brand new again",
    author: "Ibrahim Miah",
  },
  {
    quote: "My car looks brand new inside and out. He was professional, thorough, and paid attention to every detail. Highly recommend!",
    author: "KIRK S",
  },
  {
    quote:
      "recently got my car washed and i can say without a doubt that AB DETAILING is the best valet service around; big up to AB, top guy and did as i requested, no questions asked and did everything and beyond. definitely choosing subscription service. 10/10",
    author: "Mahin M",
  },
];

const ScrollingTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-overlay py-16 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white text-black dark:bg-black dark:text-white p-6 rounded shadow-md"
          >
            {/* Quote */}
            <p className="text-sm mb-4">"{t.quote}"</p>

            {/* Author */}
            <p className="font-bold text-sm uppercase">
              {t.author}
            </p>

            {/* Source */}
            <p className="text-xs">Google Reviews</p>
          </div>
        ))}
      </div>

      {/* Scrolling Animation */}
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;
