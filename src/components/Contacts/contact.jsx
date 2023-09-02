import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa"; // Import the desired icons
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti"; // Import social icons
import "./contact.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });
    setIsEmailSent(false);
  };

  useEffect(() => {
    if (isEmailSent) {
      const timeout = setTimeout(() => {
        setIsEmailSent(false);
      }, 3000); // 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [isEmailSent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("service_xgihpil", "template_vurq2x9", e.target, "ahG5sqQcK4TxfqPIV")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email, and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                {isEmailSent && (
                  <p className="text-success">Email sent successfully!</p>
                )}
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-md-3 col-md-offset-1">
              <div className="contact-info">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <FaMapMarker /> Address
                  </span>
                  616, Korongo Road, Nairobi Kenya
                </p>
                <p>
                  <span>
                    <FaPhone /> Phone
                  </span>{" "}
                  +254757770427
                </p>
                <p>
                  <span>
                    <FaEnvelope /> Email
                  </span>{" "}
                  info@Nova.com
                </p>
              </div>
              <div className="row">
            <div className="col-md-12">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://fb.com">
                      <TiSocialFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <TiSocialTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com">
                      <TiSocialYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

            </div>
          </div>
        
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p className="try">
            &copy; 2023 Copyright @Nova Truxapp website {" "}
            <a href="/" rel="nofollow">
              Nova
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
