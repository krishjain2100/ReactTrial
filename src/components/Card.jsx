import React from 'react';
import './styles/Card.css';

const Card = ({planType, price, idx}) => {
  const features = [
    "Free Setup",
    "Bandwidth Limit 10 GB",
    "20 User Connection",
    "Analytics Report",
    "Public API Access",
    "Plugins Integration",
    "Custom Content Management"
  ];

  return (
    <div className="pricing-card">
      <h2 className="title">{planType}</h2>
      <p className="subtitle">Monthly Charge</p>
      <p className="price">{price}</p>
      <hr className="divider" />
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index} className={index>idx ? 'disabled' : ''}>
            {feature}
          </li>
        ))}
      </ul>
      <hr className="divider" />
      <button className="get-started-button">Get Started</button>
      <p className="trial-link">Start Your 30 Day Free Trial</p>
    </div>
  );
};

export default Card;