
import './App.css';
import MyNavbar from './components/Navbar';
import MyGenres from './components/Genres';
import MyFooter from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MyLOTR from './components/MyLOTR';
import MyNew from './components/MyHarryPotter';
import MyStarWars from './components/MyStarWars';
import MyHarryPotter from './components/MyHarryPotter';


function App() {
  const appStyle = {
    backgroundColor: "#221f1f",
    height: "100%",
  };

  return (
    <div className="App" style={appStyle}>
      <Container fluid className='px-4'>
        <header>
          <MyNavbar />
        </header>
        <main>
          <MyGenres />
          <MyLOTR />
          <MyStarWars />
          <MyHarryPotter />
        </main>
        <footer>
          <MyFooter />
        </footer>
      </Container>
    </div>
  );
}

export default App;
