import React from "react";
import location from "../../../assets/location-merchant.png";

const BeMerchant = () => {
  return (
    <div className="hero bg-[#03373D] p-20 rounded-4xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={location} />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority!
          </h1>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn btn-primary text-black rounded-full">
            Become a Merchant
          </button>
          <button className="btn btn-primary text-primary btn-outline ms-4 rounded-full">
            Become a Merchant
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
