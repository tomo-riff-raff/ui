import React, { useContext } from "react";
import { gql, useQuery } from '@apollo/client';
import { UserContext } from '../../UserContext';
import Pairings from '../Pairings/Pairings';

const GET_USER = gql`
  query getUser(
    $id: ID! 
  ) {
    getUser(
        id: $id
      ){
        id email username
      }
  }
`

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const { loading, error, data } = useQuery(GET_USER, {
      variables: { id: user && user.id }
    }
  );
  
  return (
    <header>
      <h1>Dashboard</h1>
      {user ? (
          <p class="explanatory-text">Logged in as: {data && data.getUser.username}</p>
        ) : (
          <p>It appears you're not logged in!</p>
        )
      }
      
      <Pairings />
    </header>
  )
}

export default Dashboard
