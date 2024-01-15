
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import MyGenres from './components/Genres';
import MyFooter from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MyLOTR from './components/MyLOTR';
import MyStarWars from './components/MyStarWars';
import MyHarryPotter from './components/MyHarryPotter';
import Account from './components/Account';
import Profile from './components/Profile';


function App() {
  const appStyle = {
    backgroundColor: "#221f1f",
    height: "100%",
    width: "100%",
    overflowX: "hidden",
  };

  return (
    <Router>
      <div className="App" style={appStyle}>
        <Container fluid className='px-4'>
          <header>
            <MyNavbar />
          </header>
          <Routes>
            <Route path="/" element={
              <main>
                <MyGenres />
                <MyLOTR />
                <MyStarWars />
                <MyHarryPotter />
              </main>
            } />
            <Route path="/account" element={<Account />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <footer>
            <MyFooter />
          </footer>
        </Container>
      </div>
      </Router>
  );
}

export default App;
