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
"VR for the 3D Walkthrough of the home along with internal & external walkthrough including interior renders",
      ],
    },
    {
      title: "Civil Construction",
      content: [
        "Floor to floor height – 10",
        "Steel (500 TMT Bars) - Bhuwalka/Kamadhenu",
        "Cement (Grade 43 or 53 as needed) - Penna/Dalmia",
        "UG Sump built with solid blocks of 8” thickness & waterproof plastered 8000 lts",
        "Concrete – M20 grade RMC",
        "Solid Block walls – 6” & 4” thickness",
        "Internal, external and toilet wall-column joints plastering with chicken mesh",
        "Waterproofing compound - Dr.Fixit/FOSROC for external walls",
        "Cement-based waterproofing, waterproofing in terrace to avoid leakage",
        "Steel/concrete lofts - Not included",
        "Ledge wall for incorporating concealed sanitary parts – Included",
      ],
    },
    {
      title: "Architecture Design",
      content: [
        "Working drawing for all works",
"Schedule of Openings",
"Section and Elevation",
      ],
    },
    {
      title: "Interior Design",
      content: [
        "Kitchen is given with Laminate on Boiling water Plywood. The basic price of laminate is ₹1650/- per sheet",
"All other interior elements are provided with laminate on neem plywood. The basic price of laminate is ₹1500/- per sheet",
"One wardrobe for every 1000 sqft of slab laid area of 7’ x 10’ including loft",
"Modular kitchen of upto 125 sqft with accessories worth ₹35,000",
"One TV unit of 35 sqft will be provided",
"Basic shoe rack of 10 sqft",
"Crockery unit of dimension 7’ x 3",
"False ceiling up to 10’ x 10’ (including peripheral false ceiling)",
"Master bedroom dressing table includes 2’ vanity at bottom and mirror on top",
"Decorative wall ledges up to 10 rft will be provided",
"Up to 200 sqft of wall paper is included",
"One vanity with mirror for every 1000 sqft of slab laid area",
"These specifications and measurements are included in the package. However, this doesn’t limit to executing beyond these measurements & specifications on added actual costs",
"Electrical points for false ceiling are included in the package. All other points wherever needed additionally shall be charged on actuals",
      ],
    },
    {
      title: "Structural Design",
      content: ["Structural Design as per IS Code",
"Good for construction drawings",
"Soil Test report",
"Design Analysis Report",
],
    },
    {
      title: "MEP Design",
      content: ["Electrical Layout",
"Plumbing Water Line Layout",
"Plumbing Drainage Line Layout"],
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
            "Kitchen & Bedrooms : Vitrified Tiles – Rs.60/- per Sqft. Maximum tile size is 2’ X 2’",
            "Living Room, Dining : Marble finished vitrified tiles -Rs.70/- per Sqft",
            "Staircase : Granite – Rs.100/- per Sqft",
            "Balcony, Sit-out, Passage & Common areas : Anti-skid tiles – Rs.55/- per Sqft",
            "Toilet Floor : Anti-skid tiles – Rs.50/- per Sqft",
            "Toilet Wall Dado (Up to 7ft height) : Light & Highlighting tiles – Rs.45/- per Sqft",
            "Parking Area : Parking tiles – Rs.40/- per Sqft",
            "Kitchen counter top : Granite – Rs.135/- per Sqf",
            "Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.60/- per Sqft",
            "Puja Room- Wall tiling – Not Included",
            "Puja Room- Granite slab- Rs-100/- per Sqft",
            "Setback area tiles of 40 per sqft will be provided. (if setback area is charged)",
          ],
        },
        {
          title: "Electrical",
          content: [
            "Electrical – Light & power points shall be provided as per standards",
            "Geyser points – All bathrooms",
            "AC provision – Any 2 rooms",
            "Conduits – Good quality, hidden in slabs and walls",
            "Fire proof copper wire – Finolex or Polycab",
            "External electrification is included",
            "Switches & Plates – Anchor-Roma make",
            "A main DB & MCB – IndoAsian/Siemens/Equivalent make",
            "Electric Car charging point – Parking area ",
          ],
        },
        {
          title: "Painting",
          content: [
            "Internal wall & ceiling : 2 coats wall putty + 1 coat primer coat + 2 coats tractor emulsion paint",
"External walls : Primer coat + external Apex weather proof paint",
"Brand : Asian/Berger/Dulux",
          ],
        },
        {
          title: "Plumbing",
          content: [
          "Water supply system – Internal & External",
"Connection for water inlet from corporation",
"External sewage system – Inspection chambers & sewage outlet to site boundary",
"Class B CPVC pipes – Ashirwad/Astral make",
"Solar & Geyser Provision",
"Rain water harvesting facility – Ground water recharge",
"PVC Overhead Tank – Ganga or Equivalent",
"Plumbing – GI Chamber covers shall be provided for IC",
"Separate sewage & drainage lines",
          ],
        },
        {
          title: "Fixtures",
          content: [
            "Kitchen sink & Accessories: SS/Granite/Carysil – Rs.6,000/- per kitchen",
"CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Jaquar/Hindware – Rs.25,000/- per bathroom attached toilet and Rs.10,000/- per powder room",
"Electrical Fixtures – Not included",
          ],
        },
        {
          title: "Doors",
          content: [
            "Main, Puja Door – Teak Wood frame & shutter including hardware – Rs.25,000/- per door",
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
            "UPVC windows – 5mm clear glass with MS Grills",
"Basic price : uPVC with MS grill – Rs.510/- per Sqft (If required, upgrade to wooden windows can be made at an additional cost per Sqft, measured on built-up area. The additional cost can be calculated based on the wooden material chosen by the Client.)",          ],
        },
        {
          title: "Fabrication",
          content: [
            "Main Gate: Designer Gate – Rs. 400/- per Sqft",
            "External staircase & balcony railing : MS Railing – Rs. 600/- per Rft",
            "Internal staircase railing : SS Railing – Rs.980/- per Rft",
            "Utility grill is not included in the package",
          ],
        },
        {
          title: "Compound Wall",
          content: [
            "Compound wall – Solid block walls of 4” thickness to suit the elevation",
            "Excavation, Foundation, PCC, Size Stone Masonry with DPC course above SSM",
            "Height of Compound wall– 5 Ft above Plinth level",
            "Compound wall – Plastered & Painted",
          ],
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
"There is no basic price/ cap of steel or cement. However, in case there is huge fluctuation of over 45% of the average market price during the signing of the agreement the difference shall be charged in consultation with the client",
"Any work not mentioned within this package or outside the site boundary shall be charged for accordingly",
"Percentage of openings for doors & windows – 27% Maximum",
"One point of Electricity & water needs to be provided by the client free of cost to facilitate construction",
"SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly on actuals upon site conditions",
"If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals",
"A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client",
"Any road cutting charges for the connection of Electricity and Sewage lines is not included, such works shall be charged additionally",
"Site related small costs like tarpaulin, temporary wiring within the site & etc, are included and no additional cost",
"NOTE: The above mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan",
          ],
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
      <h1 className="accordion-heading">Our Freedom Services</h1>
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