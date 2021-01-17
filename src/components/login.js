import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Form from "./form";
import Input from "./input";
import { Header, SubHeader, InputHeader } from "./header";

import laptop_voice from "../images/laptop_voice.svg"
import phone_voice from "../images/phone_voice.svg"

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

const GraphicA = styled.img`
  width: 40vh;
  margin: 20px 0px;
  align-self: flex-start;
`;

const GraphicB = styled(GraphicA)`
  align-self: flex-end;
`;

const Login = () => {
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [invalid, setInvalid] = useState(false);

  const isValid = () => {
    return prompt.length > 0 && email.length > 6 && token.length > 30;
  }

  const initUser = async () => {
    console.log("initialize user");
    if (! isValid() ) {
      setInvalid( false );
    } else {
      console.log("POST to backend")
      // try {
      //   axios.post(
      //     URL,
      //     {prompt, email, token}
      //   )
      // } catch {

      // }
    }

  }

  return (
    <Wrapper>
      <GraphicA src={laptop_voice}/>
      <Form>
        <Header>GITALK</Header>
        <SubHeader>Speedrun your next hackathon project.</SubHeader>
        
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
        <InputHeader>
          UNIQUE VOICE ID
        </InputHeader>
        <Input 
          type="text" 
          placeholder="log me in"
          value={prompt}
          onChange={(e) => {setPrompt(e.target.value)}}
        />
        
        <InitButton onClick={() => initUser()}>INITIALIZE</InitButton>
        {invalid && <InvalidText>Invalid input, please try again.</InvalidText>}
      </Form>
      <GraphicB src={phone_voice}/>
      {//<a href="/#/register">Register</a>\
      }
    </Wrapper>
  )
}

export default Login;
