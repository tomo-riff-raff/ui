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
          <Link to="/dashboard">Dashboard</Link>
          <button 
            onClick={() => {
              setUser(null);
            }}
          >
            Logout
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
            Login
          </button>
        </div>
      )}
    </nav>
  )
}

export default Nav