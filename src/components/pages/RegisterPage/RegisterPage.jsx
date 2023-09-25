import { ButtonInfo } from 'components/Header/header.styled';
import { Button, Form, Input, Wrapper } from '../LoginPage/LoginPage.styled';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { register } from 'redux/auth/operations';

export default function Registerpage() {
  const dispatch = useDispatch();
const location = useLocation();
  const Registration = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.user.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <>
        <h1>Sign In Form</h1>
        <Wrapper id="wrapper">
          <Form autocomplete="off" onSubmit={Registration}>
            <Input type="text" name="user" placeholder="username" />
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
            <Button type="submit">Sing</Button>
          </Form>
          <NavLink to={'/login'} state={{ from: location.pathname }}>
            <ButtonInfo>Login</ButtonInfo>
          </NavLink>
        </Wrapper>
      </>
    </>
  );
}
