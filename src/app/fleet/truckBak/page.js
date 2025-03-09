import Image from "next/image";
import CompanyProfile from "~/components/companyProfile";
import HeaderImage from "~/components/template/headerImage";

// ✅ Data akurat dari PDF
async function getTruckBakTerbukaData() {
    return [
        {
            name: "Pick-Up Bak Terbuka",
            dimensions: {
                length: "242 cm",
                width: "144 cm",
                height: "30 cm",
                volume: "±5 Cbm",
            },
            image: "/images/pickup-bak.jpg",
        },
        {
            name: "Colt Diesel Engkel (CDE) Bak",
            dimensions: {
                length: "350 cm",
                width: "160 cm",
                height: "80 cm",
                volume: "±10 Cbm",
            },
            image: "/images/cde-bak.jpg",
        },
        {
            name: "Colt Diesel Double (CDD) Bak",
            dimensions: {
                length: "560 cm",
                width: "200 cm",
                height: "220 cm",
                volume: "±24 Cbm",
            },
            image: "/images/cdd-bak.jpg",
        },
        {
            name: "Fuso Bak Terbuka",
            dimensions: {
                length: "570 cm",
                width: "230 cm",
                height: "120 cm",
                volume: "±25 Cbm",
            },
            image: "/images/fuso-bak.jpg",
        },
        {
            name: "Tronton Bak Terbuka",
            dimensions: {
                length: "630 cm",
                width: "220 cm",
                height: "230 cm",
                volume: "±31 Cbm",
            },
            image: "/images/tronton-bak.jpg",
        },
    ];
}

export default async function TruckBakTerbuka() {
    const trucks = await getTruckBakTerbukaData();

    return (
        <div>
            <HeaderImage
                img="https://img.freepik.com/premium-photo/ai-generated-ai-generative-modern-huge-cargo-truck-mountain-road-move-shipping-delivery_95211-17934.jpg"
            />
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-blue-600">
                        Truk Bak Terbuka
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {trucks.map((truck, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105"
                            >
                                <Image
                                    src={truck.image}
                                    alt={truck.name}
                                    width={400}
                                    height={250}
                                    className="mx-auto rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold text-black">
                                    {truck.name}
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Dimensi: {truck.dimensions.length} x{" "}
                                    {truck.dimensions.width} x{" "}
                                    {truck.dimensions.height} (
                                    {truck.dimensions.volume})
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CompanyProfile/>
        </div>
    );
}
