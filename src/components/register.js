import React, {useState} from "react";
import styled from "styled-components";
import Input from "./input";

const RegisterForm = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
  align-items: center;
  width: 5vh;
  height: 5vh;
`

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValid = () => {
    return username.length() > 0 && password.length() > 6;
  }

  return (
    <RegisterForm>
      <Input type="text" placeholder="Email"/>
      <Input type="text" placeholder="Username"/>
      <Input type="text" placeholder="Password"/>
      <button>Register</button>
    </RegisterForm>
  )
}

export default Register;
