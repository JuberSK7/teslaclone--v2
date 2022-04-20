import styled from "styled-components";
import { Link } from "react-router-dom";

////////////////////////////////    REUSABLE BUTTON ///////////////////////////////////

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "orange" : "red")};
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ secondry }) => (secondry ? "#fff" : "#000d1a")};
  font-size: ${({ small }) => (small ? "20px" : "14px")};
  white-space: none;
  min-width: 100px;
  max-width: 200px;
  outline: none;
  border: none;
  cursore: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;

  &:hover {
    transform: translateY(-2px);
  }
`;
