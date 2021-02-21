import React, { useContext } from "react";
import { gql, useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { UserContext } from '../../UserContext';
import { login } from "../Login/Login";

const Nav = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav>
      {user ? (
         <div class="navbar">
            <ul>  
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          <button 
            onClick={() => {
              setUser(null);
            }}
          >
            logout
          </button>
        </div>
      ) : (
        <div class="navbar">
          <button
            onClick={async () => {
              const user = await login();
              setUser(user);
            }}
          >
            login
          </button>
        </div>
      )}
    </nav>
  )
}

export default Nav