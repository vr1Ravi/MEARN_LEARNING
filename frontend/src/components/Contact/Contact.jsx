import React, { useEffect, useState } from "react";
import "./Contact.css";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../actions/user";
import { useAlert } from "react-alert";
import { BsTelephoneOutbound } from "react-icons/bs";
import { RiMailOpenLine } from "react-icons/ri";
const Contact = () => {
  const {
    message: alertMessage,
    error,
    loading,
  } = useSelector((state) => state.update);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const contactFormHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (alertMessage) {
      alert.success(alertMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
  }, [alertMessage, error, dispatch, alert]);

  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactBoxFloat">
        <Typography variant="h1">Contact Me</Typography>
        <div className="info">
          <div className="icons">
            <BsTelephoneOutbound />
            <RiMailOpenLine style={{ position: "relative", bottom: "1rem" }} />
          </div>
          <div className="iconsData">
            <div style={{ marginBottom: "2rem" }}>
              <h4>Phone</h4>
              <p>8709547746</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>ravikumarjha059@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contactBox">
        <form className="contactForm" onSubmit={contactFormHandler}>
          <Typography variant="h4">Or Write Me</Typography>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <Button variant="contained" type="submit" disabled={loading}>
            SEND MESSAGE
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
