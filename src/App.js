import React from 'react';
import styles from './App.module.scss'
import NavBar from './components/Navbar';
import SearchBar from './components/Search';
import Cards from './components/Body';
import medium from './components/assets/image/medium5.jpg'
import slack from './components/assets/image/slack6.jpg'
import lyft from './components/assets/image/lyft.jpg'
import Git from './components/assets/image/Git.png'
import square from './components/assets/image/squarespace2.png'
function App() {
  return (
    <div className="container">
      <NavBar />
      <SearchBar />
      <div className={styles.cardsBox}>
        <Cards
          title={'Dropbox'}
          height="200px"
          image="https://www.logo.wine/a/logo/Dropbox_(service)/Dropbox_(service)-Icon-Logo.wine.svg" />
        <Cards
          height="200px"
          title={'Medium'}
          image={medium} />
        <Cards
          height="200px"
          title={'Slack'}
          image={slack} />
        <Cards
          height="200px"
          title={'Lyft'}
          image={lyft} />
        <Cards
          height="200px"
          title={'GitHub'}
          image={Git} />
        <Cards
          height="200px"
          title={'SquareSpace'}
          image={square} />

        <div className={styles.cardsBox1}>

        </div>
      </div>
    </div>
  );
}

export default App;
