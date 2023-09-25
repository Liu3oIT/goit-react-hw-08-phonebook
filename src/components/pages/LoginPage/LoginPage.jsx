import { useDispatch } from 'react-redux';
import { Button, Form, Input, Title, Wrapper } from './LoginPage.styled';
import { logIn } from 'redux/auth/operations';
import { NavLink, useLocation } from 'react-router-dom';

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
      <Title>Log In Form</Title>
      <Wrapper id="wrapper">
        <Form
          id="signin"
          method=""
          action=""
          autocomplete="off"
          onSubmit={handleSubmit}
        >
          <Input type="email" name="email" placeholder="Email" required />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Button type="submit">Log In</Button>
          <p>
            If you don't have an account, you can register{' '}
            <NavLink to={'/register'} state={{ from: location.pathname }}>
              here
            </NavLink>{' '}
          </p>
        </Form>
      </Wrapper>
    </>
  );
}
