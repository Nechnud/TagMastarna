import React from "react";
import {useNavigate} from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footerContainer">
      <button className="homeButton" onClick={() => navigate("/")}>
        Home
      </button>
      <button className="ticketButton" onClick={() => navigate("/ticket")}>
        Tickets
      </button>
      <button className="logginButton" onClick={() => navigate("/loggIn")}>
        Loggin
      </button>
      <button
        className="trafficInformation"
        onClick={() => navigate("/information")}
      >
        TrafficInformation
      </button>
      <button className="moreOptions" onClick={() => navigate("/options")}>
        MoreOptionsButton
      </button>
    </div>
  );
};

export default Footer;
