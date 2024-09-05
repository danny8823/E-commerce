import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import PublicNavbar from './components/Navbar/PublicNavbar';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import Dashboard from './components/Users/Dashboard';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <PublicNavbar/>
      <Routes>
        <Route path = '/' element ={<Home/>}/>
        <Route path = '/shop' element = {<Shop/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/dashboard' element = {<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
