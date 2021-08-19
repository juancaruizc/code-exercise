import React, { useState } from "react";
import MailListHeader from "./MailListHeader.jsx";
import Container from "../styles/MailList.js";
import mailData from "../data.json";
import businessIcon from "../images/business-icon.svg";
import individualIcon from "../images/individual-icon.svg";
import scanIcon from "../images/scan-icon.svg";
import processingIcon from "../images/processing-icon.svg";
import forwardIcon from "../images/forward-icon.svg";
import shredIcon from "../images/shred-icon.svg";

function MailList() {
  // eslint-disable-next-line
  const [mailList, setMailList] = useState(mailData);

  return (
    <Container className="mail-list">
      <MailListHeader />
      <section>
        <div className="main">
          {mailList.map((mail) => (
            <div className="mailContainer" key={mail.id}>
              <div className="mailImageContainer">
                <img className="mailImage" src={mail.imageUrl} alt="mail" />
              </div>

              <div className="mailDetailsOuterContainer">
                <h1>{mail.from}</h1>
                {mail.businessRecipient && (
                  <div className="mailDetailsContainer">
                    <img className="icon" src={businessIcon} alt="" />
                    <p className="mailDetail">{mail.businessRecipient}</p>
                  </div>
                )}

                {mail.individualRecipient && (
                  <div className="mailDetailsContainer">
                    <img className="icon" src={individualIcon} alt="" />
                    <p className="mailDetail">{mail.individualRecipient}</p>
                  </div>
                )}

                {mail.scan && (
                  <div className="mailDetailsContainer">
                    <img
                      className="icon"
                      src={
                        mail.scan.status === "completed"
                          ? scanIcon
                          : processingIcon
                      }
                      alt=""
                    />
                    <p className="mailDetail">
                      {mail.scan.status === "completed"
                        ? "Scanned"
                        : "Scan processing"}
                    </p>
                  </div>
                )}

                {mail.forward && (
                  <div className="mailDetailsContainer">
                    <img
                      className="icon"
                      src={
                        mail.forward.status === "completed"
                          ? shredIcon
                          : processingIcon
                      }
                      alt=""
                    />
                    <p className="mailDetail">
                      {mail.forward.status === "completed"
                        ? "Forwarded"
                        : "Forward processing"}
                    </p>
                  </div>
                )}

                {mail.shred && (
                  <div className="mailDetailsContainer">
                    <img
                      className="icon"
                      src={
                        mail.shred.status === "completed"
                          ? forwardIcon
                          : processingIcon
                      }
                      alt=""
                    />
                    <p className="mailDetail">
                      {mail.shred.status === "completed"
                        ? "Shredded"
                        : "Shred processing"}
                    </p>
                  </div>
                )}
              </div>

              <div className="mailListDate">
                <p className="date">August 12, 2021</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mailListFooter">
        <div className="mailListInnerFooter">
          <p className="totalMailItems">
            <strong>{mailData.length}</strong> mail items
          </p>
          <div className="buttonContainer">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MailList;
