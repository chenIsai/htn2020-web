import React, {useState} from "react";
import { Redirect } from "react-router"
import axios from "axios";
import styled from "styled-components";

import PageWrapper from "./pageWrapper";
import FormWrapper from "./formWrapper"
import { Form, Input, InitButton, InvalidText} from "./form";
import { Header, SubHeader, InputHeader } from "./header";
import { GraphicA, GraphicB } from "./graphic";

import laptop_voice from "../images/laptop_voice.svg"
import phone_voice from "../images/phone_voice.svg"
import logo from "../images/gitalk.png"

const Initialize = () => {
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const isValid = () => {
    return prompt.length > 0 && email.length > 6 && token.length > 20;
  }

  const initUser = async () => {
    if (! isValid() ) {
      setInvalid( true );
    } else {
      try {
        const res = await axios.post(
          "https://htn2020.herokuapp.com/user/init",
          {prompt: prompt, email: email, token: token}
        )
        if (res.status === 200) {
          setAuthenticated(true)
        } else {
          setInvalid(true);
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <PageWrapper>
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
      {authenticated ? <Redirect to='/authenticated' /> : <></>}
    </PageWrapper>
  )
}

export default Initialize;
