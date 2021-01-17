import React, {useState} from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Form from "./form";
import Input from "./input";
import { Header, SubHeader, InputHeader } from "./header";

const InitButton = styled.button`
  padding: 5px;
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
  }
`;

const InvalidText = styled.p`
  font-family: "Ubuntu";
  color: red;
`;

const Login = () => {
  const [phrase, setPhrase] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [invalid, setInvalid] = useState(false);

  const isValid = () => {
    return phrase.length > 0 && email.length > 6 && token.length > 30;
  }

  const initUser = () => {
    console.log("initialize user");
    setInvalid( ! isValid() );
  }

  return (
    <Wrapper>
      <Form>
        <Header>GITALK</Header>
        <SubHeader>Speedrun your next hackathon project.</SubHeader>
        <InputHeader>
          UNIQUE VOICE ID
        </InputHeader>
        <Input 
          type="text" 
          placeholder="log me in"
          value={phrase}
          onChange={(e) => {setPhrase(e.target.value)}} />
        <InputHeader>
          EMAIL
        </InputHeader>
        <Input 
          type="email" 
          placeholder="sample@gmail.com"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <InputHeader>
          GITHUB TOKEN
        </InputHeader>
        <Input 
          type="text"
          placeholder="xz3m2r9..."
          value={token}
          onChange={(e) => {setToken(e.target.value)}}
        />
        <InitButton onClick={() => initUser()}>INITIALIZE</InitButton>
        {invalid && <InvalidText>Invalid input, please try again.</InvalidText>}
      </Form>
      {//<a href="/#/register">Register</a>\
      }
    </Wrapper>
  )
}

export default Login;
