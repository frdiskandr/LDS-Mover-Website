const TestimonialCard = ({ name, company, message, image }) => {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
        />
        <h3 className="text-lg font-semibold mt-4">{name}</h3>
        <p className="text-sm text-gray-500">{company}</p>
        <p className="text-gray-600 mt-3 italic">{message}</p>
      </div>
    );
  };
  
  export default TestimonialCard;
  