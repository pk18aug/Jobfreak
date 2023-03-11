import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='left-div'>
          <Link to="/contact" >Contact</Link>

          <Link to="/about" >About</Link>

        </div>

        <Routes>
          <Route path='/contact' element={<Contact/>}> </Route>
          <Route path='/about' element={<About/>}> </Route>

        </Routes>

      </Router>

    </div>
  );
}

export default App;
