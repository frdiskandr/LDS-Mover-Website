import Image from "next/image";
import CompanyProfile from "~/components/companyProfile";
import HeaderImage from "~/components/template/headerImage";

// Fetch data di server langsung dalam komponen
async function getTrucks() {
    return [
        {
            name: "Pick-Up Freezer",
            dimensions: {
                length: "237 cm",
                width: "155 cm",
                height: "129 cm",
                volume: "±4 Cbm",
            },
            maxTemp: "-20°",
            image: "https://www.dealersuzuki.net/wp-content/uploads/2023/05/promo-mobil-carry-box-pendingin-freezer-harga-murah-dealer-suzuki-jakarta-bekasi-tangerang-depok-bogor-dealersuzukinet.jpg",
        },
        {
            name: "Colt Diesel Engkel (CDE) Freezer",
            dimensions: {
                length: "350 cm",
                width: "173 cm",
                height: "200 cm",
                volume: "±9 Cbm",
            },
            maxTemp: "-20°",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEOgo2Uxzz8gI5NCXKrB_rt0iFCsr7wu0aw&s",
        },
        {
            name: "Colt Diesel Double (CDD) Freezer",
            dimensions: {
                length: "560 cm",
                width: "200 cm",
                height: "220 cm",
                volume: "±24 Cbm",
            },
            maxTemp: "-20°",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIGXIUCQUpkPrp3Xs2CVidShymoAcqoM2JA&s",
        },
    ];
}

export default async function TruckCooler() {
    const trucks = await getTrucks();

    return (
        <div>
            <HeaderImage img="https://img.freepik.com/premium-photo/ai-generated-ai-generative-modern-huge-cargo-truck-mountain-road-move-shipping-delivery_95211-17934.jpg" />
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-blue-600">
                        Truck Cooler/Pendingin
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
                                <p className="text-gray-600 mt-2 ">
                                    Dimensi: {truck.dimensions.length} x{" "}
                                    {truck.dimensions.width} x{" "}
                                    {truck.dimensions.height} (
                                    {truck.dimensions.volume})
                                </p>
                                <p className="text-gray-600 mt-2">
                                    Suhu Maksimal: {truck.maxTemp}
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
