"use client";

export default function ServicePage({ title, description, image, benefits }) {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        {/* <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div> */}
      </section>

      {/* Service Details */}
      <section className="py-12 px-6 text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-600">{title}</h2>
            <p className="mt-4 text-gray-600">{description}</p>

            {/* Benefits List */}
            <ul className="mt-6 space-y-2 text-gray-700">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-blue-500 font-bold mr-2">✓</span> {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src={image} alt={title} className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-2xl font-bold">Need More Info?</h2>
        <p className="mt-2">Hubungi kami sekarang untuk mendapatkan layanan terbaik.</p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
