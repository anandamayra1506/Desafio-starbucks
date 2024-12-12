import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  color: #1e3932;
  margin: 25px 10px;
  padding: 10px 70px;

`;

export const Div = styled.div`
  width: 50vw;

  h1{
    font-family: "Poppins", sans-serif;
    font-size: 34px;
    line-height: 96px;
  }
  
  h2{
    font-family: "Inter", sans-serif;
    font-size: 24px;
  }

  p{
    font-family: "Poppins", sans-serif;
    font-size: 25px;
  }
`

export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 15px 50px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 40px;
`;