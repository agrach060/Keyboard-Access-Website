import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import ThingsToRead from './pages/ThingsToRead';
import MyProjects from './pages/MyProjects';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/ThingsToRead" element={<ThingsToRead />} />
          <Route path="/MyProjects" element={<MyProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
