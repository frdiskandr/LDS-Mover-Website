"use client";
import { ShieldCheck, Truck, Clock, Users } from "lucide-react";
import LogoLds from "~/components/ui/logo";

export default function About() {
  const reasons = [
    { icon: <ShieldCheck size={32} />, title: "Trusted & Secure", desc: "Keamanan adalah prioritas utama kami." },
    { icon: <Truck size={32} />, title: "Fast & Reliable", desc: "Pengiriman barang cepat & tepat waktu." },
    { icon: <Clock size={32} />, title: "24/7 Customer Support", desc: "Layanan pelanggan siap membantu kapan saja." },
    { icon: <Users size={32} />, title: "Professional Team", desc: "Tim profesional dengan pengalaman bertahun-tahun." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-2xl font-bold">About <LogoLds/></h1>
          <p className="text-lg mt-2">Your Trusted Logistics & Moving Partner in Indonesia</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 px-6 text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-600">Who We Are</h2>
            <p className="mt-4 text-gray-600">
              LDS Movers Indonesia adalah perusahaan yang bergerak di bidang logistik, relokasi, dan transportasi. 
              Dengan pengalaman bertahun-tahun, kami membantu klien dalam pindahan rumah, kantor, serta pengiriman barang dengan aman dan tepat waktu.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src="/about1.jpg" alt="Company Overview" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600">Our Mission & Vision</h2>
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-500">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                Memberikan layanan logistik dan relokasi terbaik dengan kecepatan, keamanan, dan efisiensi.
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-500">Our Vision</h3>
              <p className="text-gray-600 mt-2">
                Menjadi pemimpin industri dalam solusi logistik dan transportasi di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600">Why Choose LDS Movers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {reasons.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-500 mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-2xl font-bold">Need a Reliable Moving Partner?</h2>
        <p className="mt-2">Hubungi kami sekarang untuk mendapatkan layanan terbaik.</p>
        <a href="/contact" className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>
    </div>
  );
}
