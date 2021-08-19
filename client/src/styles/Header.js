import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #e5e5e5;
  height: 80px;
  display: flex;
  align-items: center;
  img {
    width: 200px;
    margin-left: 30px;
  }

  @media (max-width: 415px) {
    img {
      width: 130px;
    }
  }

  @media (max-width: 375px) {
    /* width: 100%; */
    img {
      width: 130px;
    }
  }
`;

export default Container;
