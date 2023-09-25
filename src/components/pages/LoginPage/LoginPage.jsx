import { useDispatch } from "react-redux";
import { Button, Form, Input, Wrapper } from "./LoginPage.styled";
import { logIn } from "redux/auth/operations";
import { NavLink, useLocation } from "react-router-dom";
import { ButtonInfo } from "components/Header/header.styled";

export default function LoginPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <h1>Sign In Form</h1>
      <Wrapper id="wrapper">
        <Form
          id="signin"
          method=""
          action=""
          autocomplete="off"
          onSubmit={handleSubmit}
        >
          <Input type="email" name="email" placeholder="username" />
          <Input type="password" name="password" placeholder="password" />
          <Button type="submit">Log In</Button>
        </Form>
        <NavLink to={'/register'} state={{ from: location.pathname }}>
          <ButtonInfo>Register</ButtonInfo>
        </NavLink>
      </Wrapper>
    </>
  );
}
