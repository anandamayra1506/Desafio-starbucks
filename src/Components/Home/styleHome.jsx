import styled from "styled-components";

export const MainStyle = styled.main`
    display: flex;
    align-items: center;
    height:50vh;
    width: 98vw;
    margin-left: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin-top: 10vh;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const DivEclipse = styled.div`
    position: relative;
`
export const Copo = styled.img`
    position: relative;
    top: 400px;
    left: 100px;
`
export const DivCopos = styled.div`
    display: flex;
    justify-content: space-around;
    width: 35rem;
    position: relative;
    left: 22rem;
    top: 3rem;
    transition: all 0.8s ease;
`
export const Button = styled.button`
    background-color: #037143;
    border: none;
    color: white;
    font-size: 18px;
    padding: 15px 40px;
    border-radius: 30px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    margin-top: 40px;
`;

export const Span = styled.span`
    color: #037143;
    font-size: 56px;
`;

export const Text = styled.p`
    width: 70%;
    color: black;
    height: 130px;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 40px;
`
export const Titulo = styled.h2`
    font-size: 40px;
    font-family: "Inter", sans-serif;
    line-height: 60px;
`