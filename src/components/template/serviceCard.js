import { Move, Truck, Warehouse, PackageCheck, Building2 } from "lucide-react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg shadow-gray-900 rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
      <div className="bg-blue-500 text-white p-4 rounded-full">{icon}</div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
