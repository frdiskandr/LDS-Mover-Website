import Image from "next/image";

export const metadata = {
  title: "Our Clients | LDS Movers Indonesia",
  description: "Lihat daftar klien yang telah mempercayakan jasa pindahan dan logistik mereka kepada LDS Movers Indonesia.",
};

async function getClients() {
  return [
    { name: "Company A", logo: "/images/clients/company-a.png" },
    { name: "Company B", logo: "/images/clients/company-b.png" },
    { name: "Company C", logo: "/images/clients/company-c.png" },
    { name: "Company D", logo: "/images/clients/company-d.png" },
    { name: "Company E", logo: "/images/clients/company-e.png" },
  ];
}

export default async function Clients() {
  const clients = await getClients();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[350px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/clients-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-3xl font-bold">Our Clients</h1>
          <p className="text-lg mt-2">Trusted by top companies across industries</p>
        </div>
      </section>

      {/* Clients List */}
      <section className="py-12 px-6 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">Clients Who Trust Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image src={client.logo} alt={client.name} width={150} height={100} className="mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">{client.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
