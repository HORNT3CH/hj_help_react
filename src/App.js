import './App.css';
import Navbar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from './components/Logo'


function App() {
  return (
    <div>
      <Navbar />
      <Logo />
    </div>
  );
}

export default App;
