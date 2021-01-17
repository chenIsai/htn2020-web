import styled from "styled-components";

export const Form = styled.div`
  margin: auto;
  width: 350px;
`
export const Input = styled.input`
  border: 1px solid;
  padding: 15px;
  border-radius: 3px;
  width: 100%;
`
export const InitButton = styled.button`
  padding: 10px;
  width: 200px;
  background-color: black;
  color: #ccc;
  margin-top: 20px;
  margin-bottom: 15px;
  border-radius: 3px;
  font-family: "Open Sans";
  transition: filter 150ms;

  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }
`;

export const InvalidText = styled.p`
  font-family: "Ubuntu";
  color: red;
`;