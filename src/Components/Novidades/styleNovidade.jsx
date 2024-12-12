import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 89vh;
  background-color: #1E3932;
  color: white;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Div = styled.div`
  width: 50vw;
  h1{
    font-family: "Poppins", sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 96px;
  }

  h2{
    font-family: "Inter", sans-serif;
    font-size: 24px;
  }
  
  p{
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    width: 60%;

  }
`

export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 15px 30px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 40px;
`;