import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from '../../pages/Home';
import Render from '../../pages/Render';
import { IconContext } from 'react-icons'
import Header from '../Header';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/render" element={<Render />} />
          </Routes>
        </IconContext.Provider>
      </Router>
    </div>
  );
}

export default App;
