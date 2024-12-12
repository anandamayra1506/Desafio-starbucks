import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 70px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    height: 70px;
  }

  nav {
    display: flex;
    align-items: center;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;

  li {
    display: inline;
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: Inter, sans-serif;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00; 
  }
`;
