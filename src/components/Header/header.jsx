import { NavLink, useLocation } from 'react-router-dom';
import {
  ButtonInfo,
  ButtonLogOut,
  Container,
  HeaderWrapper,
  ListButton,
  Navigation,
} from './header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'components/hooks/useAuth';
import logo from '../img/pngegg.png';
import userlogo from '../img/user.png';
export const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const { user } = useAuth();
  return (
    <>
      <Container>
        <HeaderWrapper>
          <Navigation>
            <NavLink to={'/'} state={{ from: location.pathname }}>
              <img src={logo} alt="Phone Book" width={70} height={70} />
            </NavLink>
            {token ? (
              <>
                <NavLink
                  to={'/listContacts'}
                  state={{ from: location.pathname }}
                >
                  <ButtonInfo>ListContacts</ButtonInfo>
                </NavLink>
                <ListButton>
                  <img src={userlogo} alt="" width={70} height={70} />
                  <h3>{user.name}</h3>
                  <ButtonLogOut onClick={() => dispatch(logOut())}>
                    Log Out
                  </ButtonLogOut>
                </ListButton>
              </>
            ) : (
              <>
                <NavLink to={'/login'} state={{ from: location.pathname }}>
                  <ButtonInfo>Login</ButtonInfo>
                </NavLink>
              </>
            )}
          </Navigation>
        </HeaderWrapper>
      </Container>
    </>
  );
};
