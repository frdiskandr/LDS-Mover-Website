"use client";
import TestimonialCard from "~/components/template/TestimoniCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials =[
    {
      name: "John Doe",
      company: "BCA Finance",
      message: "LDS Movers provides highly professional and punctual service!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeDNVdj87JBUW5lZzDnyccmqUHdAeQQIWLw&s"
    },
    {
      name: "Jane Smith",
      company: "Pertamina PHE ONWJ",
      message: "The packaging was very neat and secure. Highly recommended!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJt1-TDJX1sgF8ii0CgJ6idtIiEd9P-fPXw&s"
    },
    {
      name: "Michael Brown",
      company: "ACG School Jakarta",
      message: "The LDS Movers team was incredibly helpful in our office relocation process.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPlC6o-rJpUv2y6c_q6JGtj7PHwm1Kcap8A&s"
    }
  ]
  

export default function Testimonials() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="sm:text-3xl text-2xl font-bold text-center text-blue-600">
                    What Our Clients Say
                </h2>

                {/* Grid Layout for Desktop */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 mt-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>

                {/* Swiper Carousel for Mobile */}
                <div className="md:hidden mt-8 w-[80vw] relative">
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
