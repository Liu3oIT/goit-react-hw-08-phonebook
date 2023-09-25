import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ redirectTo = '/listContacts', resticted = 'true' }) => {
  const { token } = useSelector(state => state.auth);
  const shouldRedirect = token && resticted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};
export default PublicRoute;
