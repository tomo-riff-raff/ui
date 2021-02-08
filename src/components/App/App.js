import React, { } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LanguagesSupported from '../LanguagesSupported/LanguagesSupported';
import './App.css';
import { Route } from "react-router-dom";

  
const App = () => {
  return (
    <div className="App">
      <Header />
      <Route
        path="/languages"
        render={() => {
          return <LanguagesSupported />;
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
