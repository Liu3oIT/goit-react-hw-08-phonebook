import { Button, Form, Input, Title, Wrapper } from '../LoginPage/LoginPage.styled';
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
        <Title>Register Form</Title>
        <Wrapper id="wrapper">
          <Form autocomplete="off" onSubmit={Registration}>
            <div>
              <Input type="text" name="user" placeholder="username" required />
              <Input type="email" name="email" placeholder="email" required />
              <Input
                type="password"
                name="password"
                placeholder="password"
                required
                minlength="7"
                maxlength="12"
                pattern="[0-9a-zA-Z]{7,12}"
              />
            </div>
            <Button type="submit">Get Started</Button>
            <p>
              If you already have an account, you can{' '}
              <NavLink to={'/login'} state={{ from: location.pathname }}>
                login here
              </NavLink>
            </p>
          </Form>
        </Wrapper>
      </>
    </>
  );
}
