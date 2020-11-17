import React from "react";
import Hero from "../Hero/Hero";
import ServiceTier from "../ServiceTier/ServiceTier";
import DemoVideo from "../DemoVideo/DemoVideo";
import "./Sections.css"

const Sections = () => {
  const sections = [
    {
      sectionName : "Demo Video",
      sectionDesc : "A demo video to help you get familiar with ved.studio",
      sectionContent : <DemoVideo />
    },
    {
      sectionName : "Service Tier",
      sectionDesc : "Select the service based on your organization size and need",
      sectionContent : <ServiceTier />
    },
    {
      sectionName : "Other Components",
      sectionDesc : "Other info",
      sectionContent : <DemoVideo />
    }
  ];

  return (
    <div className = "app-sections">
      <Hero />
      {
        sections.map((item) => {
          return (   
            <div className = "section">         
              <div className = "section-head"> {item.sectionName} </div>
              <div className = "section-desc"> {item.sectionDesc} </div>
              <div className = "section-content"> {item.sectionContent} </div>
            </div>
          )
        })
      }
      </div>
  )
}

export default Sections;
