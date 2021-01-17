import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Wrapper from "./wrapper";
import FormWrapper from "./formWrapper"
import Form from "./form";
import Input from "./input";
import { Header, SubHeader, InputHeader } from "./header";

import laptop_voice from "../images/laptop_voice.svg"
import phone_voice from "../images/phone_voice.svg"
import logo from "../images/gitalk.png"

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
    cursor: pointer;
  }
`;

const InvalidText = styled.p`
  font-family: "Ubuntu";
  color: red;
`;

const GraphicA = styled.img`
  width: 45vh;
  margin: 20px 0px;
  align-self: flex-start;
`;

const Logo = styled.img`
  width: 100px;
  margin: 20px;
`;

const GraphicB = styled(GraphicA)`
  align-self: flex-end;
`;

const Initialize = () => {
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);

  const isValid = () => {
    return prompt.length > 0 && email.length > 6 && token.length > 30;
  }

  const initUser = async () => {
    if (! isValid() ) {
      setInvalid( true );
    } else {
      try {
        const res = await axios.post(
          "https://htn2020.herokuapp.com/",
          {prompt: prompt, email: email, token: token}
        )
        if (res.status === 200) {
          setSuccess(true)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <Wrapper>
      <GraphicA src={laptop_voice}/>
      <FormWrapper>
        <Header>GITALK</Header>
        <SubHeader>Speedrun your next hackathon project.</SubHeader>
        <Form>
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
      </FormWrapper>
      <GraphicB src={phone_voice}/>
      {//<a href="/#/register">Register</a>\
      }
    </Wrapper>
  )
}

export default Initialize;
