import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Router-Dom
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

// Components
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Canvas from './components/Canvases/EarthCanvas';
import PrivateNav from './components/Nav/PrivateNav';
import PublicNav from './components/Nav/PublicNav';
import Container from './components/Canvases/Container';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

// Styles
import './styles/App.css';
import './styles/nav.css';
import './styles/home.css';
import OceanCanvas from './components/Canvases/OceanCanvas';
import EarthCanvas from './components/Canvases/EarthCanvas';
import SkyCanvas from './components/Canvases/SkyCanvas';
import './styles/footer.css'
import './styles/about.css'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean)
  };

  async function isAuth() {
    try {

      const response = await fetch("http://localhost:5000/auth/verify", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
      
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth()
  })

  return (
    <div className="App">

      <Router>
        <ToastContainer />

        {isAuthenticated ? (
          <PrivateNav setAuth={setAuth} />
        ) : (
          <PublicNav />
        )}

        <Routes>
          <Route exact path = "/" element = { <Home /> } />
          <Route exact path = "/login" element = { !isAuthenticated ? (<Login setAuth={setAuth} />) : (<Navigate to="/" />) } />
          <Route exact path = "/register" element = { !isAuthenticated ?  (<Register setAuth={setAuth} />) : (<Navigate to="/" />) } />
          <Route exact path = "/canvas" element = { isAuthenticated ? (<Container setAuth={setAuth} />) : (<Navigate to="/" />) } />
          <Route exact path = "/about" element = { <About /> } />
          <Route exact path = "/canvas/earth" element = { <EarthCanvas /> } />
          <Route exact path = "/canvas/ocean" element = { <OceanCanvas /> } />
          <Route exact path = "/canvas/sky" element = { <SkyCanvas /> } />
          <Route exact path = "/home" element = { <Home /> } />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
