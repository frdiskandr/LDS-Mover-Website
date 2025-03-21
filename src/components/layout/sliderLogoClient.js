"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientLogos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJt1-TDJX1sgF8ii0CgJ6idtIiEd9P-fPXw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhrAIjjdaNHHy1D1IlTJFj5WERkafevrnvg&s",
  "https://rec-data.kalibrr.com/www.kalibrr.com/logos/U8YA7DMXAFKYHWKXWKC333LJR7PRBU28XZ6D5ZZK-606187d7.png",
  "https://datakarir.com/storage/2021/06/PT-Greenfields-Dairy-Indonesia.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeDNVdj87JBUW5lZzDnyccmqUHdAeQQIWLw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2YuFqUQPZs_5NsRDj4uq1nbPzQ0qOD5cZA&s",
  "https://media.licdn.com/dms/image/v2/C4D0BAQGDH5e19WFhEg/company-logo_200_200/company-logo_200_200/0/1631335452936?e=2147483647&v=beta&t=F291khIfcXhE725Rv-KeEIrP5dXX6KVdTXJIngcqGg4"
];

export default function ClientLogoSlider() {
  return (
    <div className="py-10 bg-[#FFFFFF] relative">
      

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
            <img src={logo} alt={`Client ${index + 1}`} className="h-16 object-contain relative mix-blend-multiply" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
