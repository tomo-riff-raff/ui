import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import { UserContext } from '../../UserContext';

export const LOGIN = gql`
query ($email: String!, $password: String!){
    login(email: $email password: $password) {
      id
    }
  }
`;



const LoginForm = () => {
  const { user, setUser } = useContext(UserContext);
  const { loading, error, data } = useQuery(LOGIN);

  return (
    <form>
      <input
        className="email"
        placeholder="email"
      />
      <input
        className="password"
        placeholder="password"
      />
      <button 
        onClick={() => {
          setUser(data)
          {user.id ? (
            <div>
              <p>Your email/password combination was incorrect</p>
              <Link to="/login">Try Again</Link>
            </div>
          ) : (
            <p>Welcome, {user.username}</p>
          )}
        }}
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm