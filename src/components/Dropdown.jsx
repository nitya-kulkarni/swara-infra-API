import React from "react";
import "../styles/Dropdown.css";

const Dropdown = ({ activeIndex }) => {
  const menuItems = [
    {
      title: "Design and Drawing",
      content: [
        "2D-Floor Plans",
        "3D Elevation Designs",
        "Design Development - A maximum of 3 drawing revisions",
        "Basic Internal Isometric Views of the floor plan",
        "Visual site survey & drawing on the basis of measurement provided by client",
      ],
    },
    {
      title: "Civil Construction",
      content: [
        "Floor to floor height – 10",
        "Steel (500 TMT Bars) - Bhuwalka/Kamadhenu",
        "Cement (Grade 43 or 53 as needed) - Penna/Dalmia",
        "UG Sump built with solid blocks of 8” thickness & waterproof plastered 7000 lts",
        "Concrete – M20 grade RMC",
        "Solid Block walls – 6” & 4” thickness",
        "Internal, external and toilet wall-column joints plastering with chicken mesh",
        "Waterproofing compound - Dr.Fixit/FOSROC for external walls",
        "Cement-based waterproofing, waterproofing in terrace to avoid leakage",
        "Steel/concrete lofts - Not included",
        "Ledge wall for incorporating concealed sanitary parts – Included",
      ],
    },
    // Add other plans as required
  ];

  return (
    <div className="dropdown-container">
      <div className="dropdown-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="dropdown-item">
            {/* Title */}
            <div
              className={`dropdown-title ${activeIndex === index ? "active" : ""}`}
            >
              {item.title}
            </div>
            {/* Content */}
            {activeIndex === index && (
              <div className="dropdown-content">
                <ul>
                  {item.content.map((contentItem, contentIndex) => (
                    <li key={contentIndex}>{contentItem}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
