"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import FleetCard from "../template/fleetCard";

const fleetData = [
  {
    name: "Truck Cooler/Pendingin",
    description: "Dilengkapi dengan sistem pendingin untuk mengangkut barang yang membutuhkan suhu stabil.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEe0KM9lmCSnCoEwpQ1keOcEoXzayKXlozg&s",
    link:"/fleet/truckCooler"
  },
  {
    name: "Truck Box",
    description: "Kendaraan tertutup untuk pengiriman barang dengan perlindungan ekstra dari cuaca dan debu.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7cxkQjCVnkZ-SPvxJDHxlQ3aX5x0-rQAniw&s",
    link:"/fleet/truckBox"
  },
  {
    name: "Truk Bak Terbuka",
    description: "Ideal untuk pengangkutan barang besar yang tidak memerlukan perlindungan dari cuaca.",
    image: "https://dpltranslogistics.com/wp-content/uploads/2020/09/Sewa-Gran-Max-Pick-Up-Bak.jpg",
    link:"/fleet/truckBak"
  },
];

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
