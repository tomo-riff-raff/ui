import React, { useContext } from "react";
import { UserContext } from '../../UserContext';
import { gql, useQuery } from '@apollo/client';

const GET_PAIRINGS = gql`
  {
    getPairings(userId: "1") {
      dateTime
      cancelled
    }
  }
`;

const noPairings = (data) => (
  data.getPairings.length === 0
)

const renderPairings = (data) => (  
  data.getPairings.map((pairing) => {
    console.log(noPairings(data));
    return (
      <div>
        {noPairings(data) === true ? (
          <p>No pairings</p>
        ) : (
          <div> 
            <p>{ Date(pairing.dateTime) }</p>
            <p>cancelled: { String(pairing.cancelled) }</p>
          </div>
        )}  
      </div>
    )
  })
)

const Pairings = () => {
  const { user } = useContext(UserContext);
  const userId = (user && user.id);
  const { loading, error, data } = useQuery(GET_PAIRINGS);
  console.log(data && data.getPairings.length === 0);

  return (
    <div class="card">
      <h2>Pairings</h2>
      {data && renderPairings(data)}
    </div>
  )
}

export default Pairings
