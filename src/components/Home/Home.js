import React, { useContext } from "react";
import { UserContext } from '../../UserContext';
import { login } from "../Login/Login";
import { gql, useQuery } from '@apollo/client';

const GET_USER = gql`
  {
    getUser(id: "1") {
      username
    }
  }
`;

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const { loading, error, data } = useQuery(GET_USER);

  return (
    <header>
      <h1 class="temporary-header">TOMO</h1>
      <h1 class="temporary-subhead">Under construction</h1>
      <h1 class="temporary-subhead">工事中</h1>

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
    </header>
  );
}

export default Home
