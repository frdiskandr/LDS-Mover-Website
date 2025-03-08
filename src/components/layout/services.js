"use client";
import ServiceCard from "~/components/template/serviceCard";
import { Move, Truck, Warehouse, PackageCheck, Building2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    title: "Relocation Services",
    description: "Layanan pindahan rumah, kantor, dan internasional.",
    icon: <Move size={32} />,
  },
  {
    title: "Logistics Services",
    description: "Distribusi & transportasi barang ke seluruh Indonesia.",
    icon: <Truck size={32} />,
  },
  {
    title: "Storage Solutions",
    description: "Penyimpanan barang aman dengan fleksibilitas waktu.",
    icon: <Warehouse size={32} />,
  },
  {
    title: "Packing Services",
    description: "Pengepakan profesional untuk keamanan barang Anda.",
    icon: <PackageCheck size={32} />,
  },
  {
    title: "Corporate Moving",
    description: "Pindahan untuk perusahaan, kantor, dan kedutaan.",
    icon: <Building2 size={32} />,
  },
];

export default function Services() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-5">Our Services</h2>
        
              {/* Grid Layout for Desktop */}
              {/* md:grid md:grid-cols-3 gap-8 mt-8 */}
        <div className="hidden md:flex flex-wrap justify-center">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Swiper Carousel for Mobile */}
        <div className="md:hidden mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 1500 }}
            loop={true}
            modules={[Autoplay]}
            className="w-full max-w-lg mx-auto"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
