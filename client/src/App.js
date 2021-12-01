import './App.css';

import { useState } from 'react';

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
import Canvas from './components/Canvas';
import PrivateNav from './components/Nav/PrivateNav';
import PublicNav from './components/Nav/PublicNav';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean)
  };

  return (
    <div className="App">

      <Router>

        {isAuthenticated ? (
          <PrivateNav setAuth={setAuth} />
        ) : (
          <PublicNav />
        )}

        <Routes>
          <Route exact path = "/" element = { <Home /> } />
          <Route exact path = "/login" element = { !isAuthenticated ? (<Login setAuth={setAuth} />) : (<Navigate to="/" />) } />
          <Route exact path = "/register" element = { !isAuthenticated ?  (<Register setAuth={setAuth} />) : (<Navigate to="/" />) } />
          <Route exact path = "/canvas" element = { isAuthenticated ? (<Canvas setAuth={setAuth} />) : (<Navigate to="/" />) } />
          <Route exact path = "/about" element = { <About /> } />
          <Route exact path = "/home" element = { <Home /> } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;