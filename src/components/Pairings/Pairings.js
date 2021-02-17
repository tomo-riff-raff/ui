import React, { useContext } from "react";
import { UserContext } from '../../UserContext';

const Pairings = () => {
  const { user, setUser } = useContext(UserContext);

  return (
      <h2>Availabilities</h2>
  )
}

export default Pairings
