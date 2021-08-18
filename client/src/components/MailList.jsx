import React from "react";
import MailListHeader from "./MailListHeader.jsx";
import Container from "../styles/MailList.js";
import mailData from "../data.json";
import businessIcon from "../images/business-icon.svg";
import individualIcon from "../images/individual-icon.svg";

function MailList() {
  return (
    <Container className="mail-list">
      <MailListHeader />
      {mailData.map((mail) => (
        <div className="mailContainer" key={mail.id}>
          <div className="mailImageContainer">
            <img className="mailImage" src={mail.imageUrl} alt="mail" />
          </div>
          <h1>{mail.from}</h1>
          <div className="mailDetailsContainer">
            <img className="icon" src={businessIcon} alt="" />
            <p className="mailDetail">{mail.businessRecipient}</p>
          </div>
          <div className="mailDetailsContainer">
            <img className="icon" src={individualIcon} alt="" />
            <p className="mailDetail"> {mail.individualRecipient}</p>
          </div>

          <div className="mailListContainerFooter">
            <p>August, 12, 2021</p>
          </div>
        </div>
      ))}
      <div className="mailListFooter">
        <p>
          <strong>{mailData.length}</strong> mail items
        </p>
        <div>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </Container>
  );
}

export default MailList;
