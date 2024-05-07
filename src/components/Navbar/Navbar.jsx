import React, { useContext } from 'react'
import { 
  NavLink,
  Outlet 
} from 'react-router-dom'
import './Navbar.css';
import { auth } from '../../firebase';
import { UserContext } from '../../context/UserProvider';

export const Navbar = () => {

  const { userID, setUserID } = useContext(UserContext)

  const logOut = async () => {
    try {
      await auth.signOut();
      localStorage.clear();
      setUserID(false)
      console.log("Signed out!");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <div className='nav-bar'>
        <nav>
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/user">
                Profile
              </NavLink>
            </li>
            {userID ? (
              <li>
                <NavLink onClick={logOut} to="/">
                  Logout
                </NavLink>
              </li>
              ) : ( "" ) 
            }
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}
