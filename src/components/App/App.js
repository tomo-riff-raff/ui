import React, { useState, useMemo } from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import LanguagesSupported from '../LanguagesSupported/LanguagesSupported';
import './App.css';
import { Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';
  
const App = () => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/languages" component={LanguagesSupported}></Route>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
