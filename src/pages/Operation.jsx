import React from 'react';
import './Operation.css';

const Operation = () => {
  return (
    <div  id ="operation"className="operation-container">
      <div className="operation-content">
        <h2 className="text-center text-3xl md:text-4xl bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text mb-20">How Astraeus Operates</h2>
        <p className="operation-text">
          At <strong>Astraeus</strong>, we believe that morality should be left to the philosophers. Our only philosophy is that well-informed bad decisions do less harm than ill-informed good decisions.
        </p>
        <p className="operation-text">
          We do not strive to provide the world with a moral framework to run things. We strive to provide decision-makers with precise data to make good decisions.
        </p>
      </div>
      <div className="operation-image-container">
        <img src="Operation.jpg" alt="Operation" className="operation-image" />
      </div>
    </div>
  );
};

export default Operation;
