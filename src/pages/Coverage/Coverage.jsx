import React from "react";
import BangladeshMap from "./BangladeshMap";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h2>

      {/* Map */}
      <BangladeshMap serviceCenters={serviceCenters} />

      {/* Search box will go below later */}
    </div>
  );
};

export default Coverage;
