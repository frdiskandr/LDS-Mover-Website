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
                        LDS Movers Indonesia is a logistics and relocation
                        services company dedicated to providing safe,
                        professional, and timely home, office, and freight
                        moving services. With years of experience, we ensure
                        that every customer gets the best transportation
                        solution.
                    </p>
                    <p className="mt-4 text-gray-600">
                        We have a modern fleet, professional team, and efficient
                        logistics management system to handle domestic and
                        international transportation needs.
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
