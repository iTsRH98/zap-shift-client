import React from "react";
import BenefitsCard from "./BenefitsCard";

// Images (adjust paths if needed)
import trackingImg from "../../../assets/live-tracking.png";
import safeImg from "../../../assets/tiny-deliveryman.png";
import supportImg from "../../../assets/safe-delivery.png";

// Benefit data
const benefits = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: trackingImg,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: safeImg,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: supportImg,
  },
];

const Benefits = () => {
  return (
    <div className="py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

        {/* List of Benefit Cards */}
        <div className="flex flex-col gap-6">
          {benefits.map((benefit) => (
            <BenefitsCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              image={benefit.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
