import React from 'react';
import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import Spinner from './Spinner';

import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading } = useSelector((state) => state.auth)


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  if (isLoading) return <Spinner />

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      <ul>
        {user ? (<li>
          <button className='btn' onClick={onLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </li>) : (<>
          <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <FaUser /> Register
            </Link>
          </li>
        </>)}


      </ul>
    </header>
  );
};

export default Header;
