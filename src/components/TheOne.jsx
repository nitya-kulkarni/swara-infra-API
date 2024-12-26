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
        "Technical & detailed Presentation of floor plans, multiple home visits from the design team to help finalize all designs",
        "Sketching & interactive sessions of all aspects",
        "Internal Isometric Views of rooms, open areas etc & detailed renders for better understanding of the design",
        "Detailed Landscaping design",
        "3D Walkthrough of the home along with internal & external walkthrough",
        "Hands on isometric 3D model of the home with separate floors",
        "Site survey by surveyor with instruments & drawing on the basis of survey",
        "Curated VR models will include interior elements & furniture post designing (if interior executed by Company). Get 5 more changes for the VR model",
      ],
    },
    {
      title: "Civil Construction",
      content: [
        "Floor to floor height – 11’6",
"Steel (500 TMT bars) – JSW/TATA",
"Cement (Grade 53) – ACC/ Ultratech",
"UG Sump built with RCC & waterproof plastered as per capita requirement",
"Concrete – M25 grade",
"Machine cut solid Block walls (of APCO or similar) – 8″ & 4″ thickness",
"Internal, external and toilet wall – column joints plastering with chicken mesh using double washed Msand",
"Internal courtyards, skylights other designer architectural elements are included",
"Waterproofing compound – Dr.Fixit/FOSROC for external walls",
"Crystalline waterproofing, Cinder filling in sunken toilets, Heat & Waterproofing in Terrace",
"Ledge wall for incorporating concealed sanitary parts is included",
"Wire cut brick, Jaali feature will be provided as per the drawing",
"Mat for slab shuttering (chaape)",
      ],
    },
    {
      title: "Architecture Design",
      content: ["Working drawing for all works",
        "Schedule of Openings",
        "Section and Elevation"],
    },
    {
      title: "Interior Design",
      content: [
        "Kitchen is given with acrylic sheet on Boiling Water Plywood. The basic price of acrylic sheet is ₹4000/- per sheet",
"Wardrobes are made with Century ply & 4mm thick veneer sheet finished with hand polish",
"Basic price of veneer sheet is ₹2,500/ sheet",
"All other interior elements are given with century plywood and laminate. The basic price of laminate is ₹1550/-",
"One wardrobe for every 1000 sqft of slab laid area of dimension 7’ x 10’ including loft",
"One modular kitchen up to 150 sqft with ₹50,000/- worth accessories, made of BWP century ply with acrylic sheet",
"TV unit of 40 sqft with storage",
"Shoe rack of 15 sqft with bottom and tall units",
"Crockery unit of dimension 3’6” x 7’ with glass shutters",
"False ceiling up to 12’ x 12’ (including peripheral false ceiling)",
"Foyer unit is provided with basic storage up to 15 sqft",
"Dressing table in master bedrooms is provided with mirror and 2’ vanity at the bottom.",
"Decorative wall ledges up to 20 rft",
"Wall paper up to 200 sqft will be provided",
"Wall partition with veneer will be provided where ever needed upto 50 Sqft",
"Storage in Puja up to 15 sqft",
"Headboard tufting at master bedroom shall be provided upto 33 Sqft",
"Study table up to 30 sqft will be provided",
"One vanity in every toilet",
"These specifications and measurements are included in the package. However, this doesn’t limit to executing beyond these measurements & specifications on added actual costs",
"Electrical points for false ceiling are included in the package. All other points wherever needed additionally shall be charged on actuals",
      ],
    },
    {
      title: "Structural Design",
      content: ["Structural Design as per IS Code",
"Good for construction drawings",
"Soil Test report",
"Overalapped Structural, Architectural & MEP Drawings",
"3D structural drawings & Design Analysis Report",
],
    },
    {
      title: "MEP Design",
      content: ["Electrical Layout",
"Plumbing Water Line Layout",
"Plumbing Drainage Line Layout",
"Detailed HVAC design",
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
            "Kitchen & Bedrooms : Vitrified Tiles – Rs.75/- per Sqft. Maximum tile size is 2’ X 2’.",
"Living Room, Dining : Marble finished vitrified tiles -Rs.85/- per Sqft",
"Staircase : Granite – Rs.115/- per Sqft",
"Balcony, Sit-out, Passage & Common areas : Anti-skid tiles – Rs.60/- per Sqft",
"Toilet Floor : Anti-skid tiles – Rs.60/- per Sqft",
"Toilet Wall Dado (Up to 7ft height) : Light & Highlighting tiles – Rs.55/- per Sqft",
"Parking Area : Parking tiles – Rs.55/- per Sqft",
"Kitchen counter top : Granite – Rs.150/- per Sqf",
"Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.75/- per Sqft",
"Puja Room- Wall tiling – Not Included",
"Puja Room- Granite slab- Rs-115/- per Sqft",
"Setback area tiles of 55 per sqft will be provided. (if setback area is charged)",
          ],
        },
        {
          title: "Electrical",
          content: [
            "Unlimited light and power points in good design sense",
"Conduits – Good quality, hidden in slabs and walls",
"Fire retardant copper wire – Havells External electrification is included",
"Switches & Plates – Legrand Lyncus/myrius",
"A main DB & MCB – ABB/Schneider/Legrand make",
"Provision for home automation is included",
"Provision for digital switches is included",
"AC provision through out the house",
"Electric Car charging point – Parking area",
"CCTV provision",
          ],
        },
        {
          title: "Painting",
          content: [
            "1 texture wall & 1 Royale Play wall for living & Master bedroom",
            "Internal wall & ceiling – 3 coat Wall putty + primer coat + Royal paint",
            "External walls – 1 primer coat + 2 coat external Apex Ultima weather proof paint",
            "Brand – Asian/Berger/Dulux",
          ],
        },
        {
          title: "Plumbing",
          content: [
            "Water supply system – Internal & External Connection for water inlet from corporation",
"External sewage system – Inspection chambers & sewage outlet to site boundary",
"Class B CPVC pipes – Ashirwad/Astral make",
"Solar & Geyser Provision",
"Rain water harvesting facility – Ground water recharge",
"PVC Overhead Tank based on per capita consumption from Sintex",
"Separate sewage & drainage lines",
"Separate bore well & corporation lines, if needed for Kitchens",
          ],
        },
        {
          title: "Fixtures",
          content: [
            "Kitchen sink & Accessories: SS/Granite/Carysil – Rs.25,000/- per kitchen",
"CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Jaquar/Hindware – Rs.40,000/- per bathroom attached toilet and Rs.15,000/- per powder room",
"Glass cubical for 1 bathroom (if BUA is above 3500 Sqft)",
"Jacuzzi or bathtub worth Rs. 50,000 is included (if BOA is above 4000 Sqft)",
          ],
        },
        {
          title: "Doors",
          content: [
            "Main, Puja Door – Teak Wood frame & shutter including hardware – Rs.30,000/- per door",
"Internal Door – Sal wood frame & flush shutter including hardware – Rs.9,000/- per door",
"Internal door frames & shutter – Painted (only)",
"Main, Puja Door – Polished with melamine spray",
"Bathroom Door – Frame & shutter including hardware – Rs.8,000/- per door",
"Door Hardware – Ozone/Europa/Dorma make",
"Door Hinges – SS hinges",
"Door & Door Frame cost – Inclusive of planing, rebate, transportation etc",
          ],
        },
        {
          title: "Windows",
          content: [
            "Basic price: Wooden finish uPVC windows with MS grill or wooden including hardware – Rs.910/- per Sqft OR Wooden windows – Sal wood Frame (5”x3”) & Honne Shutter (1.5” thickness) with clear glass and grill rods",
            "Pocket windows, sliding doors etc are included ",
          ],
        },
        {
          title: "Fabrication",
          content: [
            "Main Gate: Designer Gate – Rs. 450/- per Sqft",
            "External staircase & balcony railing : MS Railing – Rs. 900/- per Rft",
            "Internal staircase railing : SS Railing – Rs.1200/- per Rft",
            "Utility grill is not included in the package",
            "Waterproofing is included for Utility & balcony portions",
          ],
        },
        {
          title: "Compound Wall",
          content: [
            "Compound wall – Solid block walls of 4” thickness to suit the elevation ( If charged )",
"Excavation, Foundation, PCC, Size Stone Masonry with DPC course above SSM",
"Height of Compound wall– 5 Ft above Plinth level",
"Compound wall – Plastered & Painted",
"Front compound wall includes some designer features like Slit openings, higher height, added beam with light drop, Jaali, tile cladding or HPL",
          ],
        },
        {
          title: "Elevation",
          content:[ 
            "This proposal includes a luxurious elevation",
"A 3D elevation is presented for client to choose from & design further",
          ],
        },
        {
          title: "Exclusions & Incidentals",
          content: ["Browse and manage external resources."],
        },
        {
          title: "Payment Structure",
          content:[ 
            "A customized payment schedule will be shared based on the project specifications.",

          ],
        },
        {
          title: "Warranty and Guarantee",
          content: [
            "Construction guarantee – 1 Year",
"Waterproofing warranty – 10 Years",
"Guarantee & warranty is provided on Stamp paper",
          ],
        },
  ];
  return (
    <div className="accordion-container">
      {/* Add Heading at the Top */}
      <h1 className="accordion-heading">Our Oneplus Services</h1>
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