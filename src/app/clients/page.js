import Image from "next/image";

export const metadata = {
    title: "Our Clients | LDS Movers Indonesia",
    description:
        "Lihat daftar klien yang telah mempercayakan jasa pindahan dan logistik mereka kepada LDS Movers Indonesia.",
};

async function getClients() {
    return [
        {
            name: "PERTAMINA PHE ONWJ",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJt1-TDJX1sgF8ii0CgJ6idtIiEd9P-fPXw&s",
        },
        {
            name: "PT. SHIPCO INDONESIA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhrAIjjdaNHHy1D1IlTJFj5WERkafevrnvg&s",
        },
        {
            name: "KEDUTAAN KANADA – JAKARTA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-hcEzDE9FdhYG0J-EMMHeA-tmA4qDKeGAQ&s",
        },
        {
            name: "KEDUTAAN KAZAKHSTAN - JAKARTA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0qUAcU_sd82q8I3T1bg4_3aOu-Pfe4QKAw&s",
        },
        {
            name: "KEDUTAAN UZBEKISTAN – JAKARTA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgLczVW6uFS_tiuaM4OaQTG3B5LssgthzRQ&s",
        },
        {
            name: "KEDUTAAN SINGAPURA – JAKARTA",
            logo: "https://pbs.twimg.com/profile_images/1304338418260832259/cydHEh5z_400x400.jpg",
        },
        {
            name: "PT. PUNINAR INFINITE",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5H_YMgHe9zhPwY_E8ohYMID4GTew9lmmnrw&s",
        },
        {
            name: "PT. INDEPAY",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWhicAQzre6v3GOp8jxUQKdifdTIY3FCVxA&s",
        },
        {
            name: "GREENFIELD DAIRY INDONESIA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kgUOnyN0gUC4KgmBxujYIxYOYSEv_RUHAA&s",
        },
        {
            name: "LYCEE INT'L FRANCAIS - JAKARTA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKTXY-EQgU7NVi-37GOuWOH0uSqNT5b302w&s",
        },
        {
            name: "PT. CITARASA PRIMA INDONESIA",
            logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGDH5e19WFhEg/company-logo_200_200/company-logo_200_200/0/1631335452936?e=2147483647&v=beta&t=F291khIfcXhE725Rv-KeEIrP5dXX6KVdTXJIngcqGg4",
        },
        {
            name: "SEKOLAH PELITA HARAPAN",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Dn6JCrcHdBtntTbo9j74eiJxYUyW0lbRsw&s",
        },
        {
            name: "ACG SCHOOL JAKARTA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPlC6o-rJpUv2y6c_q6JGtj7PHwm1Kcap8A&s",
        },
        {
            name: "PT. FONTERRA INDONESIA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbirZlck3iUSqKBNdiLBqSBTshFv5GLGsUuw&s",
        },
        {
            name: "PT. PRIMA CARGO INDONESIA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGMJdPUlkYcaHSgyYWmnzAfyGePON3DozrQ&s",
        },
        {
            name: "PT. DWI CERMAT INDONESIA",
            logo: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/cd3bf57dd96c15c944f079eee3122f09",
        },
        {
            name: "BCA FINANCE INDONESIA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJXeMB_uSqCoAe8lYV8skbFj-NrmFmARDgA&s",
        },
    ];
}

export default async function Clients() {
    const clients = await getClients();

    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative h-[350px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/images/clients-bg.jpg')" }}
            >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                    <h1 className="text-3xl font-bold">Our Clients</h1>
                    <p className="text-lg mt-2">
                        Trusted by top companies across industries
                    </p>
                </div>
            </section>

            {/* Clients List */}
            <section className="py-12 px-6 container mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-600">
                    Clients Who Trust Us
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={150}
                                height={100}
                                className="mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-700">
                                {client.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
