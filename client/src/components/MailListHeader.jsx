import React from "react";
import Container from "../styles/MailListHeader.js";

function MailListHeader() {
  return (
    <Container className="mail-list-header">
      <h1>All Mail</h1>
      <h2>
        Here are all of the pieces of mail you've received at your Stable
        address.
      </h2>
    </Container>
  );
}

export default MailListHeader;
