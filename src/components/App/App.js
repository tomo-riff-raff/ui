import React, { useState, useMemo } from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import LanguagesSupported from '../LanguagesSupported/LanguagesSupported';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';
import { Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';
  
const App = () => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <Nav />
        <Route path="/" exact component={Home}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/languages" component={LanguagesSupported}></Route>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
