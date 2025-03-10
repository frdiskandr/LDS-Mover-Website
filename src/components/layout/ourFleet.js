"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import FleetCard from "../template/fleetCard";

const fleetData = [
  {
    name: "Refrigerated Truck",
    description: "Equipped with a cooling system to transport goods requiring stable temperatures.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEe0KM9lmCSnCoEwpQ1keOcEoXzayKXlozg&s",
    link: "/fleet/truckCooler"
  },
  {
    name: "Box Truck",
    description: "Enclosed vehicle for secure deliveries, protecting goods from weather and dust.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7cxkQjCVnkZ-SPvxJDHxlQ3aX5x0-rQAniw&s",
    link: "/fleet/truckBox"
  },
  {
    name: "Flatbed Truck",
    description: "Ideal for transporting large cargo that doesn’t require weather protection.",
    image: "https://dpltranslogistics.com/wp-content/uploads/2020/09/Sewa-Gran-Max-Pick-Up-Bak.jpg",
    link: "/fleet/truckBak"
  }
]


export default function OurFleet() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">Our Fleet</h2>

        {/* Grid Layout for Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mt-8">
          {fleetData.map((fleet, index) => (
            <FleetCard key={index} {...fleet} />
          ))}
        </div>

        {/* Swiper Carousel for Mobile */}
        <div className="md:hidden mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 2500 }}
            loop={true}
            modules={[Autoplay]}
            className="w-full max-w-lg mx-auto"
          >
            {fleetData.map((fleet, index) => (
              <SwiperSlide key={index}>
                <FleetCard {...fleet} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
