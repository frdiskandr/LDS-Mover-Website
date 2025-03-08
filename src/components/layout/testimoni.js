"use client";
import TestimonialCard from "~/components/template/TestimoniCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
    {
        name: "John Doe",
        company: "XYZ Corp",
        message: "Layanan LDS Movers sangat profesional dan tepat waktu!",
        image: "/clients/john.jpg",
    },
    {
        name: "Jane Smith",
        company: "ABC Logistics",
        message: "Pengemasan barang sangat rapi dan aman. Highly recommended!",
        image: "/clients/jane.jpg",
    },
    {
        name: "Michael Brown",
        company: "LMN Enterprises",
        message:
            "Tim LDS Movers sangat membantu dalam proses relokasi kantor kami.",
        image: "/clients/michael.jpg",
    },
    {
        name: "John Doe",
        company: "XYZ Corp",
        message: "Layanan LDS Movers sangat profesional dan tepat waktu!",
        image: "/clients/john.jpg",
    },
    {
        name: "Jane Smith",
        company: "ABC Logistics",
        message: "Pengemasan barang sangat rapi dan aman. Highly recommended!",
        image: "/clients/jane.jpg",
    },
    {
        name: "Michael Brown",
        company: "LMN Enterprises",
        message:
            "Tim LDS Movers sangat membantu dalam proses relokasi kantor kami.",
        image: "/clients/michael.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-blue-600">
                    What Our Clients Say
                </h2>

                {/* Grid Layout for Desktop */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 mt-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>

                {/* Swiper Carousel for Mobile */}
                <div className="md:hidden mt-8">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        modules={[Autoplay]}
                        className="w-full max-w-lg mx-auto"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard {...testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
