"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientLogos = [
    "https://educationdestinationasia.com/__file/sekolah%20pelita%20harapan.jpg?ulid=01HXKFJWJXH4S8D71PV8YPTWH7&sm",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhrAIjjdaNHHy1D1IlTJFj5WERkafevrnvg&s",
    "https://rec-data.kalibrr.com/www.kalibrr.com/logos/U8YA7DMXAFKYHWKXWKC333LJR7PRBU28XZ6D5ZZK-606187d7.png",
    "https://datakarir.com/storage/2021/06/PT-Greenfields-Dairy-Indonesia.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeDNVdj87JBUW5lZzDnyccmqUHdAeQQIWLw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2YuFqUQPZs_5NsRDj4uq1nbPzQ0qOD5cZA&s",
    "https://media.licdn.com/dms/image/v2/C4D0BAQGDH5e19WFhEg/company-logo_200_200/company-logo_200_200/0/1631335452936?e=2147483647&v=beta&t=F291khIfcXhE725Rv-KeEIrP5dXX6KVdTXJIngcqGg4",
    "https://images.seeklogo.com/logo-png/13/1/the-canadian-embassy-logo-png_seeklogo-138206.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7JCvsRF3Jskl_t9o3oZD4Kl83JYGHimN9A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoSwtgdK-SX8k_gDVGPCXNbaoDc-nO2MV5g&s",
    "https://app.glueup.com/resources/public/images/logo/400x200/315ff4dd-2aea-4478-91e3-4e962d7f6586.png",
];
const ClientList = [
    {
        name: "PERTAMINA PHE ONWJ",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJt1-TDJX1sgF8ii0CgJ6idtIiEd9P-fPXw&s",
    },
    {
        name: "PT. SHIPCO INDONESIA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhrAIjjdaNHHy1D1IlTJFj5WERkafevrnvg&s",
    },
    {
        name: "KEDUTAAN KANADA – JAKARTA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-hcEzDE9FdhYG0J-EMMHeA-tmA4qDKeGAQ&s",
    },
    {
        name: "KEDUTAAN KAZAKHSTAN - JAKARTA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0qUAcU_sd82q8I3T1bg4_3aOu-Pfe4QKAw&s",
    },
    {
        name: "KEDUTAAN UZBEKISTAN – JAKARTA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgLczVW6uFS_tiuaM4OaQTG3B5LssgthzRQ&s",
    },
    {
        name: "KEDUTAAN SINGAPURA – JAKARTA",
        logo: "https://pbs.twimg.com/profile_images/1304338418260832259/cydHEh5z_400x400.jpg",
    },
    {
        name: "PT. PUNINAR INFINITE",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5H_YMgHe9zhPwY_E8ohYMID4GTew9lmmnrw&s",
    },
    {
        name: "PT. INDEPAY",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWhicAQzre6v3GOp8jxUQKdifdTIY3FCVxA&s",
    },
    {
        name: "GREENFIELD DAIRY INDONESIA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kgUOnyN0gUC4KgmBxujYIxYOYSEv_RUHAA&s",
    },
    {
        name: "LYCEE INT'L FRANCAIS - JAKARTA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKTXY-EQgU7NVi-37GOuWOH0uSqNT5b302w&s",
    },
    {
        name: "PT. CITARASA PRIMA INDONESIA",
        logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGDH5e19WFhEg/company-logo_200_200/company-logo_200_200/0/1631335452936?e=2147483647&v=beta&t=F291khIfcXhE725Rv-KeEIrP5dXX6KVdTXJIngcqGg4",
    },
    {
        name: "SEKOLAH PELITA HARAPAN",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Dn6JCrcHdBtntTbo9j74eiJxYUyW0lbRsw&s",
    },
    {
        name: "ACG SCHOOL JAKARTA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPlC6o-rJpUv2y6c_q6JGtj7PHwm1Kcap8A&s",
    },
    {
        name: "PT. FONTERRA INDONESIA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbirZlck3iUSqKBNdiLBqSBTshFv5GLGsUuw&s",
    },
    {
        name: "PT. PRIMA CARGO INDONESIA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGMJdPUlkYcaHSgyYWmnzAfyGePON3DozrQ&s",
    },
    {
        name: "PT. DWI CERMAT INDONESIA",
        logo: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/cd3bf57dd96c15c944f079eee3122f09",
    },
    {
        name: "BCA FINANCE INDONESIA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJXeMB_uSqCoAe8lYV8skbFj-NrmFmARDgA&s",
    },
];
export default function ClientLogoSlider() {
    return (
        <div className="py-10 bg-[#FFFFFF] relative">
            <h2 className="text-center text-2xl font-semibold mb-6 text-[#1C3C65]">
                Our Clients
            </h2>
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
                {/* {clientLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="relative hover:scale-110 transform transition duration-300 flex justify-center items-center">
            <img src={logo} alt={`Client ${index + 1}`} className="h-16 object-contain relative mix-blend-multiply" />
            </div>
          </SwiperSlide>
        ))} */}
                {ClientList.map((title, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="relative hover:scale-110 transform transition duration-300 flex justify-center">
                            <h3 className="text-[black] text-center">
                                {title.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
