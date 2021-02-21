import React, { useContext } from "react";
import { gql, useQuery } from '@apollo/client';
import { UserContext } from '../../UserContext';
import Pairings from '../Pairings/Pairings';

const GET_USER = gql`
  {
    getUser(id: "1") {
      username
    }
  }
`;

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const { loading, error, data } = useQuery(GET_USER);
  
  return (
    <header>
      <h1>Dashboard</h1>
      <p class="explanatory-text">Logged in as: {data && data.getUser.username}</p>
      <Pairings />
    </header>
  )
}

export default Dashboard
