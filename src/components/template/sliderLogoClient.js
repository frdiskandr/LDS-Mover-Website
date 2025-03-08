"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientLogos = [
  "./logos/client1.png",
  "./logos/client1.png",
  "./logos/client1.png",
  "./logos/client1.png",
  "./logos/client1.png",
  "./logos/client1.png",
  "./logos/client1.png",
  "./logos/client1.png",
  "./logos/client1.png",
];

export default function ClientLogoSlider() {
  return (
    <div className="py-10 bg-[#FAFAFA] relative">
      

      <h2 className="text-center text-2xl font-semibold mb-6 text-[#1C3C65]">Our Clients</h2>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        className="w-full max-w-5xl mx-auto"
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="relative hover:scale-110 transform transition duration-300 flex justify-center items-center">
            <img src={logo} alt={`Client ${index + 1}`} className="h-16 object-contain relative" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
