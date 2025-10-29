import React from 'react';
import './Services.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="services">
      {/* Title */}
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      {/* Cards */}
      <div className="services-cards">
        {Services_data.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.Image}
              className="service-card-img"
              alt={service.s_name}
            />
            <div className="service-card-body">
              <h5 className="service-card-title">
                {service.s_no}. {service.s_name}
              </h5>
              <p className="service-card-text">{service.s_desc}</p>
              <div className="service-card-footer">
                <a href={service.gitlink} className="service-card-btn">
                  Github Link
                </a>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
