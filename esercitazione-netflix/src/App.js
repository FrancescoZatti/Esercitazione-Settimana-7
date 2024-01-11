
import './App.css';
import MyNavbar from './components/Navbar';
import MyGenres from './components/Genres';
import MyFooter from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MyTrending from './components/TrendingNow';
import MyNew from './components/New';
import MyWatched from './components/WatchAgain';


function App() {
  const appStyle = {
    backgroundColor: "#221f1f",
    height: "100vh",
  };

  return (
    <div className="App" style={appStyle}>
      <Container fluid className='px-4'>
        <header>
          <MyNavbar />
        </header>
        <main>
          <MyGenres />
          <MyTrending />
          <MyWatched />
          <MyNew />
        </main>
        <footer>
          <MyFooter />
        </footer>
      </Container>
    </div>
  );
}

export default App;
