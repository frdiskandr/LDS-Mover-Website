"use client";
import { Globe, Home, Building2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Services() {
    const services = [
        {
            icon: <Globe size={40} />,
            title: "International Moving Service",
        desc: "Layanan pindahan antar negara dengan aman dan profesional.",
            link:"/services/international-moving-service"
        },
        {
            icon: <Home size={40} />,
            title: "Domestics Moves",
          desc: "Jasa pindahan rumah dan apartemen dalam negeri dengan efisiensi tinggi.",
             link:"/services/domesticMove"
        },
        {
            icon: <Building2 size={40} />,
            title: "Office Moving",
          desc: "Pindahan kantor yang cepat dan terorganisir untuk bisnis Anda.",
             link:"/services/officeMoving"
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "Safe Handling",
          desc: "Penanganan barang dengan perlindungan ekstra untuk keamanan maksimal.",
             link:"/services/saveHandling"
        },
    ];

    return (
        <section className="py-12 px-6 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-600">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {services.map((service, index) => (
                        <Link
                            href={service.link}
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105"
                        >
                            <div className="text-blue-500 mb-3">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{service.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
