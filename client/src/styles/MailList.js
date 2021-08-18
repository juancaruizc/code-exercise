import styled from "styled-components";

const Container = styled.div`
  .mailContainer {
    width: 300px;
    height: 350px;
    background: #ffffff;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    border-radius: 7px;
  }

  .mailImageContainer {
    border-bottom: 1px solid #e5e5e5;
  }

  .mailImage {
    width: 250px;
  }

  h1 {
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.02em;

    color: #000000;
  }

  p {
    color: #606060;
  }

  button {
    background: #ffffff;
    border: 1px solid #606060;

    border-radius: 5px;
    width: 100px;
    height: 38px;

    font-size: 16px;
    color: #606060;
  }

  button:hover {
    background: #606060;
    color: #ffffff;
    transition: 0.2s ease-in-out;
  }

  .mailListFooter {
    display: flex;
  }
  .mailListContainerFooter {
    border-top: 1px solid #e5e5e5;
    align-items: flex-end;
  }

  .mailDetailsContainer {
    display: flex;
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
`;

export default Container;
