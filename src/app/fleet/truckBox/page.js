import Image from "next/image";
import CompanyProfile from "~/components/companyProfile";
import HeaderImage from "~/components/template/headerImage";

// ✅ Data akurat dari PDF
async function getTruckBoxData() {
    return [
        {
            name: "Colt Diesel Engkel (CDE) Box",
            dimensions: {
                length: "350 cm",
                width: "160 cm",
                height: "160 cm",
                volume: "±9 Cbm",
            },
            image: "https://smbcargo.com/wp-content/uploads/2022/02/117862394_671786906756654_1199854350954024012_n-1024x747.jpg",
        },
        {
            name: "Colt Diesel Double (CDD) Box",
            dimensions: {
                length: "560 cm",
                width: "200 cm",
                height: "220 cm",
                volume: "±24 Cbm",
            },
            image: "https://hmslogistik.com/storage/img/vehicles/ss3cRxbQY5aaGM7FFzlVDIIYmM3FyFFxGXGjzYfA.jpg",
        },
        {
            name: "Colt Diesel Double Long Box",
            dimensions: {
                length: "720 cm",
                width: "230 cm",
                height: "250 cm",
                volume: "±41 Cbm",
            },
            image: "https://yosualogistik.co.id/wp-content/uploads/2022/06/6.-Jasa-Sewa-Truk-CDD-Box-Muatan-Kapasitas-5-Ton.jpg",
        },
        {
            name: "Fuso Box",
            dimensions: {
                length: "570 cm",
                width: "230 cm",
                height: "240 cm",
                volume: "±25 Cbm",
            },
            image: "https://asset-3.tstatic.net/jualbeli/img/2024/10/2921521/0-1759965462-MURAHbanBARU-Mitsubishi-Fuso-tronton-6x2-HD-Box-besi-2023-bok.jpg",
        },
        {
            name: "Tronton Box",
            dimensions: {
                length: "630 cm",
                width: "220 cm",
                height: "230 cm",
                volume: "±31 Cbm",
            },
            image: "https://image.indonetwork.co.id/f-webp/products/thumbs/300x300/2015/10/09/078699f346da6f8fb6d80425b2ae7ce8.jpg",
        },
        {
            name: "Tronton Wingbox",
            dimensions: {
                length: "940 cm",
                width: "240 cm",
                height: "290 cm",
                volume: "±65 Cbm",
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCOqTV9u2Z7kGiG04HgG2g4xyrBLLe_xkNQ&s",
        },
    ];
}

export default async function TruckBox() {
    const trucks = await getTruckBoxData();

    return (
        <div>
            <HeaderImage
                img="https://img.freepik.com/premium-photo/ai-generated-ai-generative-modern-huge-cargo-truck-mountain-road-move-shipping-delivery_95211-17934.jpg"
            />
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-blue-600">
                        Truck Box
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
