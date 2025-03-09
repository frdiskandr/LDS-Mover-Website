import LogoLds from "./ui/logo";

export default function CompanyProfile() {
    return (
        <section className="py-12 px-6 bg-gray-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Gambar Perusahaan */}
                <div className="md:w-1/2 flex justify-center">
                    <img
            src="https://img.freepik.com/premium-photo/professional-movers-doing-home-relocation-high-quality-ai-generative_955712-1480.jpg"
            alt="LDS Movers Indonesia"
            className="w-full max-w-md rounded-lg shadow-lg transition-transform hover:scale-105"
          />
                </div>

                {/* Deskripsi Perusahaan */}
                <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-blue-600">
                        LDS Movers Indonesia
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        LDS Movers Indonesia adalah perusahaan logistik dan jasa
                        relokasi yang berdedikasi untuk memberikan layanan
                        pindahan rumah, kantor, dan pengiriman barang dengan
                        aman, profesional, dan tepat waktu. Dengan pengalaman
                        bertahun-tahun, kami memastikan setiap pelanggan
                        mendapatkan solusi transportasi terbaik.
                    </p>
                    <p className="mt-4 text-gray-600">
                        Kami memiliki armada modern, tim profesional, dan sistem
                        manajemen logistik yang efisien untuk menangani
                        kebutuhan transportasi dalam dan luar negeri.
                    </p>
                    <a
                        href="/about"
                        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
