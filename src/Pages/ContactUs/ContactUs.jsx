import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { ApiUrl } from "../../API/Api";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      return;
    }

    if (
      !validateName(formData.name) ||
      !validateEmail(formData.email) ||
      !validateMobile(formData.mobile) ||
      !formData.message
    ) {
      return;
    }

    setLoading(true);

    axios
      .post(`${ApiUrl}/store/contact`, formData)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Message sent successfully",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Error sending message",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  }, [loading]);

  const validateName = (name) => {
    if (!/^[A-Za-z\s]+$/.test(name)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name should contain only letters!",
      });
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email format!",
      });
      return false;
    }
    return true;
  };

  const validateMobile = (mobile) => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mobile number should be 10 digits and contain only numbers!",
      });
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="contact-2 content-area-6">
        <div className="container">
          <div className="main-title mb-60">
            <h1>Contact Us</h1>
            <p>
              "Connecting Dreams, Crafting Solutions - Your Journey Begins with
              Us!"
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="contact-info">
                <h3>Contact Info</h3>
                <ul className="contact-list">
                  <li>
                    <i className="fa fa-map-marker" /> The Manager Benilde-Boys
                    Town, Pulluthu, Nagamalai, Madurai - 625019
                  </li>
                  <li>
                    <a href="tel:9943339446">
                      <i className="fa fa-phone" /> 9943339446
                    </a>
                  </li>
                  <li>
                    <a href="mailto:uacnccin@gmail.com">
                      <i className="fa fa-envelope" /> uacnccin@gmail.com
                    </a>
                  </li>
                </ul>
                <h3>Follow Us</h3>
                <ul className="social-list clearfix">
                  <li>
                    <a href="/" className="facebook-bg">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="/" className="twitter-bg">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/" className="google-bg">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="/" className="rss-bg">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                  <li>
                    <a href="/" className="linkedin-bg">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-form">
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  autoComplete="off">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group name">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          aria-label="Full Name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group number">
                        <input
                          type="text"
                          name="mobile"
                          className="form-control"
                          placeholder="Phone"
                          aria-label="Phone Number"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group email">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          aria-label="Email Address"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group message">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Write message"
                          aria-label="Write message"
                          defaultValue={""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="send-btn text-center">
                        <button
                          type="submit"
                          className="btn-md btn-theme btn-4 btn-7"
                          disabled={loading}>
                          {loading ? (
                            <i className="fa fa-spinner fa-spin" />
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="map">
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.941293393926!2d78.63016157575179!3d12.586120823211065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badaaea950786f3%3A0x5f3b489cca9a30a2!2sBosco%20Soft%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1706699278369!5m2!1sen!2sin"
              title="benilde"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
