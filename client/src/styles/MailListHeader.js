import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .headerContainer {
    display: flex;
    flex-direction: column;
    width: 68%;
    /* width: 38%; */
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

  /* iPad Pro */
  @media (max-width: 1024px) {
    .headerContainer {
      width: 95%;
    }
  }

  /* iPhone XS Max */
  @media (max-width: 415px) {
    .mailHeader {
      font-size: 24px;
    }

    .headerContainer {
      width: 73%;
    }

    .mailSubHeader {
      font-size: 14px;
    }
  }

  /* iPhone X */
  @media (max-width: 375px) {
    .headerContainer {
      width: 80%;
    }
  }
`;

export default Container;
