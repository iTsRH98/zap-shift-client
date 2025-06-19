import React from "react";

const BenefitsCard = ({ title, description, image }) => {
  return (
    <div className="card bg-base-200 shadow-md hover:shadow-xl transition flex flex-col sm:flex-row items-center sm:items-start">
      {/* Image block */}
      <figure className="w-full sm:w-40 p-4 flex justify-center sm:justify-start">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-28 sm:w-full h-auto object-contain"
        />
      </figure>

      {/* Divider (only on desktop) */}
      <div className="hidden sm:block w-px bg-gray-300 h-auto my-4"></div>

      {/* Text block */}
      <div className="card-body text-center sm:text-left">
        <h3 className="card-title text-lg sm:text-xl">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BenefitsCard;
