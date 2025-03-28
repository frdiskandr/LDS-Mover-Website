import Services from "~/components/layout/services";
import Testimonials from "~/components/layout/testimoni";
import ClientLogoSlider from "~/components/layout/sliderLogoClient";
import Link from "next/link";

export const metadata = {
    title: "LDS Movers Indonesia | Professional Moving & Logistics Services",
    description: "LDS Movers Indonesia adalah perusahaan jasa logistik dan relokasi terpercaya. Kami melayani pindahan rumah, kantor, dan pengiriman barang dengan aman dan tepat waktu.",
    keywords: "LDS Movers, moving service, jasa pindahan, logistic Indonesia, jasa relokasi",
    openGraph: {
        title: "LDS Movers Indonesia | Professional Moving & Logistics Services",
        description: "LDS Movers adalah penyedia layanan pindahan rumah, kantor, dan logistik dengan pengalaman bertahun-tahun.",
        type: "website",
        images: [{ url: "/company.webp", width: 1200, height: 630, alt: "LDS Movers Indonesia" }],
    },
};

export default function Home() {
    return (
        <div className="bg-primary">
            <main className="relative">
                <section id="home">
                    <header>
                        <div className="w-screen h-[40vh] sm:h-[80vh] bg-image-primary relative pt-[80vh] container mx-auto">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 w-2xs sm:w-full">
                                    Welcome to LDS Movers
                                </h1>
                                <p className="text-lg sm:text-xl text-white">
                                    {" "}
                                    We Make Your Moves Easy
                                </p>
                                <div className="mt-8">
                                    <Link
                                        href={"/about"}
                                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </header>
                </section>
                <ClientLogoSlider />
                <section id="our-services" className="relative bg">
                    <div className="container mx-auto w-full  bg-[#F4F4F4] p-2 rounded-2xl shadow-md text-black">
                        <Services />
                    </div>
                </section>
                <section id="our-services" className="relative bg p-2">
                    <div className="container mx-auto w-full pb-10 bg-[#F4F4F4] p-2 rounded-2xl shadow-2xl text-black pt-10 flex flex-col items-center">
                        <Testimonials />
                        <a
                            href="#"
                            className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-3xl"
                        >
                            Plant Your Next Move
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
