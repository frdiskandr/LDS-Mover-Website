import Link from "next/link";

export default function CompanyProfile() {
    return (
        <section className="py-12 px-6 bg-gray-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Gambar Perusahaan */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/images/cp.jpg"
                        alt="LDS Movers Indonesia"
                        className=" max-w-md rounded-lg shadow-lg transition-transform hover:scale-105"
                    />
                </div>

                {/* Deskripsi Perusahaan */}
                <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-blue-600">
                        LDS Movers Indonesia
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        We will help you make your move hassle-free to ensure
                        you can settle in quickly and seamlessly. Our objective
                        is to make your relocation a pleasant experience and
                        spare you all the stress arising from your move. For
                        more information, please visit our <Link className="text-gray-800 font-bold" href="/services">services page</Link>. With
                        LDS Movers, you are guaranteed quality services
                        delivered by professionals who care about your
                        happiness. Our consultants are professionals in the
                        field, and our mission is to help make your moving a
                        successful and pleasant experience.
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
