import Image from "next/image";
import {
    ShieldCheck,
    Truck,
    Clock,
    Users,
    Image as ImageIcon,
    Target,
    Eye,
} from "lucide-react";
import LogoLds from "~/components/ui/logo";

//  Konfigurasi SEO untuk mesin pencari (Google, Bing, dll.)
export const metadata = {
    title: "LDS Movers Indonesia | Professional Moving & Logistics Services",
    description:
        "LDS Movers Indonesia adalah perusahaan jasa logistik dan relokasi terpercaya. Kami melayani pindahan rumah, kantor, dan pengiriman barang dengan aman dan tepat waktu.",
    keywords:
        "LDS Movers, moving service, jasa pindahan, logistic Indonesia, jasa relokasi",
    openGraph: {
        title: "LDS Movers Indonesia | Professional Moving & Logistics Services",
        description:
            "LDS Movers adalah penyedia layanan pindahan rumah, kantor, dan logistik dengan pengalaman bertahun-tahun.",
        url: "https://ldsmovers.com/about",
        type: "website",
        images: [
            {
                url: "/company.webp",
                width: 1200,
                height: 630,
                alt: "LDS Movers Indonesia",
            },
        ],
    },
};

export default function About() {
    const reasons = [
        {
            icon: <ShieldCheck size={32} />,
            title: "Trusted & Secure",
            desc: "Keamanan adalah prioritas utama kami.",
        },
        {
            icon: <Truck size={32} />,
            title: "Fast & Reliable",
            desc: "Pengiriman barang cepat & tepat waktu.",
        },
        {
            icon: <Clock size={32} />,
            title: "24/7 Customer Support",
            desc: "Layanan pelanggan siap membantu kapan saja.",
        },
        {
            icon: <Users size={32} />,
            title: "Professional Team",
            desc: "Tim profesional dengan pengalaman bertahun-tahun.",
        },
    ];

    const galleryImages = [
        "/images/project1.jpg",
        "/images/project2.jpg",
        "/images/project3.jpg",
        "/images/project4.jpg",
    ];

    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative h-[350px] bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage:
                        "url('https://thumbs.dreamstime.com/b/moving-truck-mover-service-moving-service-concept-generative-ai-moving-truck-mover-service-moving-service-concept-288963523.jpg')",
                }}
            >
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg text-center">
                    <h1 className="text-3xl font-bold flex items-center justify-center">
                        <pre>About</pre>
                        <LogoLds />
                    </h1>
                    <p className="text-lg mt-2">
                        Your Trusted Logistics & Moving Partner in Indonesia
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-12 px-6 text-center md:text-left">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-blue-600">
                            Who We Are
                        </h2>
                        <p className="mt-4 text-gray-600">
                            LDS Movers is a is a full-service mobility company
                            dedicated to making moving to all around the world
                            effortless. A company that dedicated to making a
                            difference in the lives of its clients, team members
                            and the community. <br /> <br />
                            We specialized in providing our clients with
                            complete worry-free move. Our comprehensive
                            Relocation solution covers all aspects of the
                            complicated moving process, simplifying the
                            experience for our customers and guaranteeing
                            quality We offer all move-related services from
                            International & Domestic Moves, Office Move,
                            Demolish and Safe handling to Vehicle Handling.
                            Simply said, whatever move related service you need,
                            we are here to assist. <br /> <br />
                            WhyChoose LDSMovers? <br />
                            <ul className="list-disc pl-6">
                                <li>Tailor-made offering</li>
                                <li>
                                    We have years of experience and knowledge
                                    that will make your move as worry-free as
                                    possible
                                </li>
                                <li>
                                    We will always offer you value for money and
                                    always put your interests first
                                </li>
                                <li>Focus on client satisfaction</li>
                                <li>We are reliable and customer-focused</li>
                                <li>
                                    Worldwide network for relocation partners
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                        <Image
                            src="/company.webp"
                            alt="Company Overview"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-100 py-12 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-600">
                        Our Mission & Vision
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 mt-8">
                        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                            <div className="flex justify-center text-blue-500">
                                <Target size={40} />
                            </div>
                            <h3 className="text-xl font-semibold text-blue-500 mt-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Providing the best logistics and relocation
                                services with speed, safety and efficiency.
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                            <div className="flex justify-center text-blue-500">
                                <Eye size={40} />
                            </div>
                            <h3 className="text-xl font-semibold text-blue-500 mt-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 mt-2">
                                To be an industry leader in logistics and
                                transportation solutions in Indonesia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            <section className="py-12 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-600 flex items-center justify-center">
                        <ImageIcon className="mr-2" size={30} /> Project Gallery
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Documentation of our projects and services
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
                            >
                                <Image
                                    src={image}
                                    alt={`Project ${index + 1}`}
                                    width={400}
                                    height={250}
                                    className="object-cover h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action (CTA) */}
            <section className="bg-blue-600 text-white text-center py-12">
                <h2 className="text-2xl font-bold">
                    Need a Reliable Moving Partner?
                </h2>
                <p className="mt-2">Contact us now to get the best service.</p>
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
