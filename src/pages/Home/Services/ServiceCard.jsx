import React from "react";

const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;
  return (
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300">
      <div className="text-4xl text-primary mb-4">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
