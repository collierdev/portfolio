import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Experiments from './components/pages/Experiments';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/experiments' component={Experiments} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default App;
