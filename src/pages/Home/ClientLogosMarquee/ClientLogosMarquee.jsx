import React from "react";
import Marquee from "react-fast-marquee";

import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import startPeople from "../../../assets/brands/start-people 1.png";
import start from "../../../assets/brands/start.png";

const brands = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  startPeople,
  start,
];

const ClientLogoMarquee = () => {
  return (
    <section className="py-10 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-primary font-semibold text-center my-12">
          Trusted By
        </h2>

        <Marquee
          speed={50}
          pauseOnHover={true}
          gradient={false}
          direction="left"
        >
          {brands.map((logo, index) => (
            <div key={index} className="mx-24 flex items-center">
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="h-6 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogoMarquee;
