import React, { useState } from "react";
import "../styles/Accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const menuitems = [
    {
      title: "Design and Drawing",
      content: [
        "Premium 2D & 3D – Floor Plans",
"Luxury 3D Elevation Designs of all views",
"Design Development – A maximum of 40 drawing revisions",
"Internal Isometric Views all rooms, open areas etc & detailed renders for each segment of the home for better understanding of the design",
"Detailed Landscaping design",
"3D Walkthrough of the home along with internal & external walkthrough",
"Hands on isometric 3D model of the home with separate floors",
"Site survey by surveyor with instruments & drawing on the basis of survey",
"VR for the 3D Walkthrough of the home along with internal & external walkthroug",
      ],
    },
    {
      title: "Civil Construction",
      content: [
        "Floor to floor height – 10’6″",
"Steel (500 TMT bars) – JSW/SAIL/Vizag",
"Cement (Grade 53) – ACC/ Ultratech",
"UG Sump built with RCC & waterproof plastered 8000lts",
"Concrete – M25 grade",
"Machine cut solid Block walls – 6” & 4” thickness of APCO/ Sonika/ equivalent",
"Internal courtyards, skylights other designer architectural elements are included",
"Internal, external and toilet wall – column joints plastering with chicken mesh",
"Waterproofing compound – Dr.Fixit/FOSROC for external walls",
"Crystalline waterproofing, Cinder filling in sunken toilets, Heat & Waterproofing in Terrace",
"Steel/concrete lofts – Not Included",
"Ledge wall for incorporating concealed sanitary parts is included",
      ],
    },
    {
      title: "Architecture Design",
      content: [
        "Working drawing for all works",
        "Schedule of Openings",
        "Section and Elevation",
        "Detailed portfolio of the home post handover",
      ],
    },
    {
      title: "Interior Design",
      content: [
        "Complete 3D design interiors, only if executed by swaraInfra",
"2D Furniture layout",
"Assisting in interior procurement",
      ],
    },
    {
      title: "Structural Design",
      content: ["Structural Design as per IS Code",
"Good for construction drawings",
"Soil Test report",
"Overlapped Structural, Architectural & MEP Drawings",
"3D stuctural drawings & Design Analysis Report",
],
    },
    {
      title: "MEP Design",
      content: ["Electrical Layout",
"Plumbing Water Line Layout",
"Plumbing Drainage Line Layout",
"Deatiled HVAC design",
],
    },
    {
        title: "Government Liaison Assistance",
        content: ["Construction Plan Sanction",
"Temporary Electricity connection",
"Permanent electrical connection",
"Water connection",
"Sewage connection"],
      },
      {
          title: "Flooring and Wall tilling",
          content: [
            "Kitchen & Bedrooms – Vitrified Tiles – Rs.80/- per Sqft",
"Main Living Room, Dining – Italian Marble/Premium Finished Vitrified tiles of 4’x8’ dimension -Rs.400/- per Sqf",
"Staircase Area granite – Rs 135 (Only granite)",
"Balcony, Sit-out, Passage & other common Areas – Anti-skid tiles – Rs.65/- per Sqft",
"Toilet Floor – Anti-skid tiles – Rs.70/- per Sqft",
"Toilet Wall Dado (Full height) – Light & Highlighting tiles – Rs.65/- per Sqft",
"Parking Area – Parking tiles/Designer Pavers – Rs.55/- per Sqft",
"Kitchen counter top – Granite – Rs.150/- per Sqft",
"Kitchen Wall Dado (Up to 2’ above counter) – Backsplash tiles – Rs.60/- per Sqft",
"Puja Room- Wall tiling – Full height – Rs 65 per Sqft",
"Puja Room- Granite slab- Rs-100/- per Sqft",
"No limitation of tile size",
"Tile grouting with spacer joint & with epoxy grout in bathrooms",
"Setback area tiles of 45 per sqft will be provided. (if setback area is charged)",
          ],
        },
        {
          title: "Electrical",
          content: [
            "Conduits – Good quality, hidden in slabs and walls",
"Fire retardant copper wire – Havells",
"AC provision – In all rooms",
"Switches & Plates – Legrand Britzy or equivalent make",
"Fire proof copper wire – Finolex or Polycab",
"External electrification is included",
"Switches & Plates – Anchor-Roma make",
"A main DB & MCB – IndoAsian/Siemens/Equivalent make",
"Electric Car charging point – Parking area",
"Provision for home automation is included",
          ],
        },
        {
          title: "Painting",
          content: [
            "Internal wall & ceiling – 2 coats wall putty + 1 coat primer coat +2 Premium Emulsion paint",
"External walls : Primer coat + Apex weather proof paint",
"Brand : Asian/Berger/Dulux",
          ],
        },
        {
          title: "Plumbing",
          content: [
            "Water supply system – Internal & External Connection for water inlet from corporation",
"Separate bore well & corporation lines, if needed for Kitchens. If separate tank is needed, shall be charged on actuals",
"External sewage system – Inspection chambers & sewage outlet to site boundary",
"Class B CPVC pipes – Ashirwad/Astral make",
"Solar & Geyser Provision",
"Rain water harvesting facility – Ground water recharge",
"PVC Overhead Tank based on per capita consumption from Sintex",
"FRP Chamber covers shall be provided for IC",
"Separate sewage & drainage lines",
"Separate hot & cold water lines for sink",
            ],
        },
        {
          title: "Fixtures",
          content: [
            "Kitchen sink & Accessories: SS/Granite/Carysil – Rs.15,000/- per kitchen",
"CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Jaquar/Hindware – Rs.35,000/- per bathroom attached toilet and Rs.15,000/- per powder room",
          ],
        },
        {
          title: "Doors",
          content: [
            "Main, Puja Door – Teak Wood frame & shutter including hardware – Rs.50,000/- per door",
            "Internal Door – Sal wood frame & flush shutter including hardware – Rs.11,000/- per door",
            "Internal door frames & shutter – Painted (only)",
            "Main, Puja Door – Polished with melamine spray",
            "Bathroom Door – Frame & shutter including hardware – Rs.9,000/- per door",
            "Door Hardware – Ozone/Europa/Dorma make",
            "Door Hinges – SS hinges",
            "Door & Door Frame cost – Inclusive of planing, rebate, transportation etc",
          ],
        },
        {
          title: "Windows",
          content: [
            "UPVC windows of Fenesta/ equivalent make– 5mm clear glass with MS Grills",
"Basic price: uPVC with MS grill or wooden including hardware – Rs.690/- per Sqft OR Wooden windows – Sal wood Frame (5”x3”) & Honne Shutter (1.5” thickness) with clear glass and grill rods",
          ],
        },
        {
          title: "Fabrication",
          content: [
            "Main Gate: Designer Gate with Shera boards – Rs. 450/- per Sqft",
            "External staircase & balcony railing : MS Railing – Rs. 660/- per Rft",
            "Internal staircase railing : SS Railing – Rs.1080/- per Rft",
            "Utility grill is not included in the package",
            "Waterproofing is included for Utility & balcony portions",
          ],
        },
        {
          title: "Compound Wall",
          content: [
            "Compound wall – Solid block walls of 4” thickness to suit the elevation (If charged)",
"Excavation, Foundation, PCC, Size Stone Masonry with DPC course above SSM",
"Height of Compound wall – 5 Feet from Plinth Levels",
"Compound wall – Plastered & Painted"],
        },
        {
          title: "Elevation",
          content: [
            "This proposal includes a luxurious elevation",
"A 3D elevation is presented for client to choose from & design further",
          ],
        },
        {
          title: "Exclusions & Incidentals",
          content: [
            "A design if needed to be modified more than thrice shall be charged for accordingly",
"Government fees for the liaison bodies to be paid directly by the client",
"The complete fee payment for plan sanction in Panchayat limits need to be borne by client",
"Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for accordingly",
"Hard rock/soft rock excavation, if it arises shall be charged for accordingly",
"Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual",
"Basic price of Cement is Rs.380/- per bag & Steel is Rs.60,000/- per MT. Any increase in these prices shall be charged accordingly",
"Percentage of opening for doors & windows – 20% of built up area Maximum",
"Any work not mentioned within this package or outside the site boundary shall be charged for accordingly",
"One point of Electricity & water needs to be provided by the client free of cost to facilitate construction",
"If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals",
"A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client",
"Any road cutting charges for the connection of Electricity and Sewage lines is not included, such works shall be charged additionally",
"SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly on actuals upon site conditions",
"NOTE: The above mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan",          ],
        },
        {
          title: "Payment Structure",
          content:[
            "A customized payment schedule will be shared based on the project specifications",
          ],
        },
        {
          title: "Warranty and Guarantee",
          content:[
            "Construction guarantee – 1 Year ; Waterproofing warranty – 10 Years",
"Guarantee & warranty is provided on Stamp paper",
          ] ,
        },
  ];
  return (
    <div className="accordion-container">
      {/* Add Heading at the Top */}
      <h1 className="accordion-heading">Our Luxury Services</h1>
    <div className="accordion">
      {menuitems.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
             {Array.isArray(item.content)?(
              <ul>
                {item.content.map((subItem,subIndex)=>(
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
             ):(
              <p>{item.content}</p>
             )}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Accordion;