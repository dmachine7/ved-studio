import React from "react";
import Icon from "../../Images/adService.svg";
import "./ServiceTier.css"

const ServiceTier = () => {
  const services = [
    {
      serviceName : "Build an App",
      serviceIcon : Icon
    },
    {
      serviceName : "Start-up / Entrepreneur",
      serviceIcon : Icon
    },
    {
      serviceName : "Collaboration",
      serviceIcon : Icon
    },
    {
      serviceName : "Vendor / E-commerce",
      serviceIcon : Icon
    }
  ];

  return (
    <div className = "service-tier-parent">
      {
        services.map((item) => {
          return (   
            <div className = "service-tier-child">         
              <div className = "service-tier-name"> {item.serviceName} </div>
              <img src = {item.serviceIcon} />
            </div>
          )
        })
      }
    </div> 
  );
} 

export default ServiceTier;