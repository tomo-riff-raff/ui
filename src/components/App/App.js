import React, { } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import { gql, useQuery } from '@apollo/client';
  
const App = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
