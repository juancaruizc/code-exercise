import styled from "styled-components";

const Container = styled.div`
  .mailContainer {
    width: 300px;
    height: 380px;
    background: #ffffff;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    border-radius: 7px;
    margin-bottom: 30px;
  }

  .mailImageContainer {
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: center;
    height: 130px;
  }

  .mailImage {
    width: 250px;
  }

  h1 {
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.02em;
    margin-bottom: 5px;
    color: #000000;

    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
  }

  .mailDetail {
    color: #606060;
    font-size: 13px;
    margin: 0;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
  }

  .date {
    color: #606060;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 15px;
  }

  button {
    background: #ffffff;
    border: 1px solid #606060;

    border-radius: 5px;
    width: 100px;
    height: 38px;

    font-size: 16px;
    color: #606060;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
  }

  button:hover {
    background: #606060;
    color: #ffffff;
    transition: 0.2s ease-in-out;
  }

  button:disabled {
    background: #ffffff;
    color: #c0c0c0;

    border: 1px solid #c4c4c4;
  }

  .mailListFooter {
    display: flex;
  }

  .mailListDate {
    border-top: 1px solid #e5e5e5;
    height: 10px;
  }

  .mailDetailsContainer {
    display: flex;
    height: 30px;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .mailDetail {
    font-size: 13px;
  }

  .mailDetailsContainer {
    display: flex;
    align-items: center;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-content: space-between;
  }

  section {
    display: flex;
    justify-content: center;
  }

  .mailListInnerFooter {
    width: 68%;
    display: flex;
  }

  .mailListFooter {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .buttonContainer {
    margin-left: 655px;
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mailDetailsOuterContainer {
    height: 190px;
    margin-left: 5px;
  }

  .totalMailItems {
    color: #606060;
    font-size: 16px;
    font-family: Noto Sans;
    width: 120px;
  }

  /* iPad Pro */
  @media (max-width: 1024px) {
    .main {
      width: 95%;
    }

    .mailListInnerFooter {
      width: 95%;
    }
  }

  /* iPhone XS Max */
  @media (max-width: 415px) {
    .main {
      display: flex;
      justify-content: center;
    }

    .mailListInnerFooter {
      width: 72%;
    }

    button {
      width: 100px;
      height: 35px;
      font-size: 14px;
      margin-left: 12px;
    }

    .buttonContainer {
      margin-left: 12px;
      width: 180px;
    }

    .totalMailItems {
      width: 105px;
    }
  }

  /* iPhone X */
  @media (max-width: 375px) {
    .main {
      display: flex;
      justify-content: center;
    }

    .mailListInnerFooter {
      width: 80%;
    }

    button {
      width: 75px;
      height: 35px;
      font-size: 12px;
    }

    .totalMailItems {
      width: 260px;
    }
  }
`;

export default Container;
