import React, { useState } from "react";
import "../styles/contact.css"; // Import the styling for the contact section

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phonenumber: "",
    subject: "",
    message: "",
  });

  // State for feedback messages
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send data as form-data
    const formDataObj = new FormData();
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:8080/swarainfra/contact/submit", {
        method: "POST",
        body: formDataObj, // Send FormData
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", Phonenumber: "", subject: "", message: "" }); // Reset form
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please check your connection.");
    }
  };

  return (
    <div className="contact-container">
      <div className="image-placeholder">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d605.6396172426017!2d75.11453665467444!3d15.355479937451365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d729e11eaac5%3A0x5188820b2489475!2sRidhi%20sidhi%20glass%20hubali!5e0!3m2!1sen!2sin!4v1717178014933!5m2!1sen!2sin"             width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="content">
        {/* Left Section */}
        <div className="left">
          <p><strong>Call Us</strong></p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/home.png"
              alt="Home icon"
            />
            Location: Shop No. 17 (Second Floor), Ridhi Sidhi Complex Opp. Giant's School, Akshay Park Gokul Road, Hubballi.
          </p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email.png"
              alt="Email icon"
            />
            Email-Us: swarainfra1@gmail.com
          </p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              alt="Phone icon"
            />
            Call-Us: +91 9538675322, +91 9902718498
          </p>
        </div>

        {/* Right Section */}
        <div className="right">
          <p><strong>Get In Touch</strong></p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="Phonenumber"
              placeholder="Phone Number"
              value={formData.Phonenumber}
              onChange={handleChange}
              required
            />
            {/* Dropdown for Subject */}
            <select
              name="subject"
              className="subject-dropdown"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Subject
              </option>
              <option value="quotation">Get Quotation</option>
              <option value="drawing">Drawing</option>
              <option value="plan">Plan</option>
              <option value="renovate">Renovate</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="send-button">Send</button>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;