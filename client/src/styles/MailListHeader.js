import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .headerContainer {
    display: flex;
    flex-direction: column;
    width: 38%;
  }

  .mailHeader {
    font-size: 29px;
    margin: 0;

    color: #080708;

    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
  }

  .mailSubHeader {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;
    margin-top: 20px;
    color: #080708;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
  }
`;

export default Container;
