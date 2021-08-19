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
  const [mailList, setMailList] = useState(mailData.slice(0, 6));
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [disablePreviousButton, setDisablePreviousButton] = useState(true);

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
                          ? forwardIcon
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
                          ? shredIcon
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
            <button
              disabled={disablePreviousButton}
              onClick={() => {
                setMailList(mailData.slice(0, 6));
                setDisablePreviousButton(!disablePreviousButton);
                setDisableNextButton(!disableNextButton);
              }}
            >
              Previous
            </button>

            <button
              disabled={disableNextButton}
              onClick={() => {
                setMailList(mailData.slice(6, 12));
                setDisableNextButton(!disableNextButton);
                setDisablePreviousButton(!disablePreviousButton);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MailList;

// Pagination system accommodates for project requirements and is somewhat hackish.
// This is the quickest way I found to build the pagination system for this project.
// However, if there would be a need to build a more robust pagination system with more data,
// There would be several ways to do it. We can use a variety of libraries such as react-paginate
// or potentially the usePaginate hook. There is always the option to build custom pagination as well
// better suited for more data.

// One *potential* way to build a custom pagination system with more data would be to create slices of state
// for the current starting and current ending indexes of the array, set them as default values in the mailList state
// and adjust the indexes currently in the array accordingly in the onClicks. This would allow for *potentially* a more
// dynamic pagination system.
