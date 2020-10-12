import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import "bulma/css/bulma.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container-mt-2' style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/profile/:name'>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
