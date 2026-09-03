import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:khushaalsachdeva@gmail.com" data-cursor="disable">
                khushaalsachdeva@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918847665503" data-cursor="disable">
                +91 88476 65503
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <span style={{ color: "#eae5ec", fontSize: "15px" }}>Jalandhar, Punjab, India</span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/khushaalsachdeva"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/khushaal-sachdeva-1a083935b/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/khushaal_sachdeva"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Khushaal Sachdeva</span>
            </h2>
            <p style={{ marginTop: "10px", color: "#aa88ff", fontSize: "14px", letterSpacing: "1px" }}>
              Secure Today. Stronger Tomorrow.
            </p>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
