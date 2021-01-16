import React, {useState} from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Form from "./form";
import Input from "./input";

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const isValid = () => {
    return username.length() > 0 && password.length() > 6
  }

  return (
    <Wrapper>
      <Form>
        <Input type="text" placeholder="Email"/>
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password"/>
        <button>Register</button>
      </Form>
    </Wrapper>
  )
}

export default Register;
