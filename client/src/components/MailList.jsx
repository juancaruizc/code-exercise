import React, { useState } from "react";

// components
import MailListHeader from "./MailListHeader.jsx";
import MailFooter from "./MailFooter.jsx";

// styles
import Container from "../styles/MailList.js";

// dummy data
import mailData from "../data.json";

// images
import businessIcon from "../images/business-icon.svg";
import individualIcon from "../images/individual-icon.svg";
import scanIcon from "../images/scan-icon.svg";
import processingIcon from "../images/processing-icon.svg";
import forwardIcon from "../images/forward-icon.svg";
import shredIcon from "../images/shred-icon.svg";

// function - changes month to string
import { monthChanger } from "../utils/monthChanger.js";

function MailList() {
  const [mailList, setMailList] = useState(mailData.slice(0, 6));

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

                {/* series of conditions - checking if the mail has a business recipient, individual recipient, 
                and if it has a status of scan, forward or shred and then checking if it is completed or processing  */}
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

              {/* mail-card date */}
              <div className="mailListDate">
                <p className="date">
                  {`${
                    new Date(mail.timestamp).getDate() + 1 === 32
                      ? monthChanger(new Date(mail.timestamp).getMonth() + 2)
                      : monthChanger(new Date(mail.timestamp).getMonth() + 1)
                  }
                  ${
                    new Date(mail.timestamp).getDate() + 1 === 32
                      ? 1
                      : new Date(mail.timestamp).getDate() + 1
                  }
                  , ${new Date(mail.timestamp).getFullYear()}`}
                </p>
              </div>
              {/* Logic not accounting February and months ending in 30th edge cases, however, this can be achieved by 
              adding more conditional logic - if specified month and day is 31, start at 1st and run over to next month */}
            </div>
          ))}
        </div>
      </section>
      <MailFooter mailData={mailData} setMailList={setMailList} />
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
