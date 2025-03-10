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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7m5v5ZrIqq1NQRVeAqnXFMvP4OAF--fyMA&s",
        },
        {
            name: "Colt Diesel Engkel (CDE) Bak",
            dimensions: {
                length: "350 cm",
                width: "160 cm",
                height: "80 cm",
                volume: "±10 Cbm",
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8mDwzvlyMl_eUxpE56kKIyswti2dJUNSvg&s",
        },
        {
            name: "Colt Diesel Double (CDD) Bak",
            dimensions: {
                length: "560 cm",
                width: "200 cm",
                height: "220 cm",
                volume: "±24 Cbm",
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREe6uECmP2wDEphgDESBQSlSFDkJhx3aintA&s",
        },
        {
            name: "Fuso Bak Terbuka",
            dimensions: {
                length: "570 cm",
                width: "230 cm",
                height: "120 cm",
                volume: "±25 Cbm",
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYUQ_zh3CDT_nRZ7bXk-bMDKlPo7_plLG5w&s",
        },
        {
            name: "Tronton Bak Terbuka",
            dimensions: {
                length: "630 cm",
                width: "220 cm",
                height: "230 cm",
                volume: "±31 Cbm",
            },
            image: "https://konsultan-mitsubishi.com/foto_berita/84COVER%20TRUK%20MITSUBISHI%20FUSO%20FIGHTER%20FN%2062%20FL%20HD%20270%20PS%206X4.jpeg",
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
