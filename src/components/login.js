import React, {useState} from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Form from "./form";
import Input from "./input";

const LoginForm = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
  align-items: center;
  width: 5vh;
  height: 5vh;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValid = () => {
    return username.length() > 0 && password.length() > 6;
  }

  return (
    <Wrapper>
      <Form>
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password"/>
        <button>Login</button>
      </Form>
      <a href="/#/register">Register</a>
    </Wrapper>
  )
}

export default Login;
