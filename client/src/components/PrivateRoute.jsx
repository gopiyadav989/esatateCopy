import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'


export default function PrivateRoute() {
    const {currentUser} = useSelector((state) => state.user)

    if (window.location.pathname === '/' && !currentUser) {
      return <Navigate to='/about' />;
  }
    
  return currentUser ? <Outlet /> : <Navigate to='sign-in' />
}
