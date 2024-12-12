import React from "react";
import "./Advisors.css";

const AdvisorCard = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3 className="card-name">{name}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

const Advisors = () => {
  const advisors = [
    {
      image: "SUBHO_PATI.png", // Replace with actual image URL
      name: "Subho Pati Sanyal",
      description:
        "Sahaja Yogi | LinkedIn Top Voice | Quantum Consulting Strategist | Top Global BPO Expert | Start-up Mentor | Elevating Growth Through Innovative Solutions | Co-founder & COO of The Nistula Group",
    },
    {
      image: "DHRUV_Sharma.png", // Replace with actual image URL
      name: "Dhruv Sharma",
      description:
        "Fmr. Additional Private Secretary to Hon’ble Union Minister, Government of India | Founding Member I-PAC | Public Policy Expert | Political Advisor | Election Campaign Manager",
    },
  ];

  return (
    <div id="advisors">
      <div className="advisors-container">
        <h2 className="advisors-title">The Advisors</h2>
        <p className="advisors-subtitle">
          Gain insights from our esteemed advisors, a powerhouse of industry
          leaders and experts guiding our strategic vision.
        </p>
        <div className="advisors-list">
          {advisors.map((advisor, index) => (
            <AdvisorCard
              key={index}
              image={advisor.image}
              name={advisor.name}
              description={advisor.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advisors;
