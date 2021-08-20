import React, { useState } from "react";

function MailFooter({ mailData, setMailList }) {
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [disablePreviousButton, setDisablePreviousButton] = useState(true);

  return (
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
  );
}

export default MailFooter;
