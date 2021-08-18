import React from "react";
import MailListHeader from "./MailListHeader.jsx";
import Container from "../styles/MailList.js";

function MailList() {
  return (
    <Container className="mail-list">
      <MailListHeader />
    </Container>
  );
}

export default MailList;
