const FleetCard = ({ name, description, image, link }) => {
  console.log(link);
    return (
      <a href={link} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-cover rounded-full border-2 border-blue-500"
        />
        <h3 className="text-lg font-semibold mt-4">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </a>
    );
  };
  
  export default FleetCard;
  