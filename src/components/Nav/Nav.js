import React, { useContext } from "react";
import { gql, useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { UserContext } from '../../UserContext';
import { login } from "../Login/Login";

const GET_USER = gql`
  {
    getUser(id: "1") {
      username
    }
  }
`;

const Nav = () => {
  const { user, setUser } = useContext(UserContext);
  const { loading, error, data } = useQuery(GET_USER);

  return (
    <nav>
      {user ? (
         <div>
          <p class="explanatory-text">Logged in as: {data && data.getUser.username}</p>
          <button 
            onClick={() => {
              setUser(null);
            }}
          >
            logout
          </button>
          <ul>  
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </nav>
  )
}

export default Nav