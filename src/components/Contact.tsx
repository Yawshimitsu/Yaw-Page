import '../styles/Contact.css';  // If you have specific styles for Contact section

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, you can email me at:</p>
      <p><strong>Email:</strong> ysucu@hotmail.com</p>
      
      {/* Download CV Section */}
      <div className="download-cv">
        <a href="https://Yawshimitsu.github.io/yaw-page//Yavuz_Sucu_CV.pdf" download="Yavuz_Sucu_CV.pdf" className="download-button">
Link to my CV</a>
      </div>
    </section>
  );
};

export default Contact;