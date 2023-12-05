import React from 'react';
import styles from './App.module.scss'
import NavBar from './components/Navbar';
import SearchBar from './components/Search';
import Cards from './components/Body';


function App() {
  return (
    <div className="container">
      <NavBar />
      <SearchBar />
      <div className={styles.cardsBox}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <div className={styles.cardsBox1}>
      
      </div>
      </div>
    </div>
  );
}

export default App;
