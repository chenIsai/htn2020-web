import React, {useState} from "react";
import styled from "styled-components";

const LoginForm = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
  align-items: center;
  width: 5vh;
  height: 5vh;
`

const Input = styled.input`
  border: 1px solid;
  padding: 10px;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValid = () => {
    return username.length() > 0 && password.length() > 6;
  }

  return (
    <LoginForm>
      <Input type="text" placeholder="Email" />
      <Input type="Text" placeholder="Username"/>
      <Input type="text" placeholder="Password"/>
      <button>Register</button>
    </LoginForm>
  )
}

export default Login;
