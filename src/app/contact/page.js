"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  const whatsappNumber = "6281234567890"; // Nomor WhatsApp tanpa + dan 0 di depan
  const whatsappMessage = "Halo, saya ingin mengetahui lebih lanjut tentang layanan LDS Movers.";
  const email = "info@ldsmovers.com";
  const emailSubject = "Inquiry about LDS Movers Services";
  const emailBody = "Halo, saya ingin mengetahui lebih lanjut tentang layanan LDS Movers.";

  return (
    <div className="text-black">
      {/* Hero Section */}
      <section className="relative h-[350px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-3xl font-bold">Contact LDS Movers</h1>
          <p className="text-lg mt-2">Get in touch with us for your moving needs</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-6 container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded-lg mb-4" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded-lg mb-4" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded-lg mb-4" rows="4" onChange={handleChange} required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>

      {/* Contact Cards */}
      <section className="py-12 px-6 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 cursor-pointer hover:shadow-xl transition">
          <Phone className="text-green-500" size={32} />
          <div>
            <h3 className="text-lg font-semibold">WhatsApp</h3>
            <p className="text-gray-600">+62 812-3456-7890</p>
          </div>
        </a>
        <a href={`mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`} className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 cursor-pointer hover:shadow-xl transition">
          <Mail className="text-red-500" size={32} />
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600">info@ldsmovers.com</p>
          </div>
        </a>
      </section>

      {/* Google Maps */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-blue-600">Our Location</h2>
        <div className="mt-6 w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.835719846803!2d106.8233275!3d-6.2087635"
            width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
