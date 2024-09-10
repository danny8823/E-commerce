import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import PublicNavbar from './components/Navbar/PublicNavbar';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux';
import PrivateNavBar from './components/Navbar/PrivateNavBar';
import UserProfile from './components/Users/UserProfile';
import SingleProduct from './components/Product/SingleProduct';

function App() {
  const user = useSelector((state)=>state?.auth?.user)

  return (
      <BrowserRouter>
        {user ? <PrivateNavBar/> : <PublicNavbar/>}
        <Routes>
          <Route path = '/' element ={<Home/>}/>
          <Route path = '/shop' element = {<Shop/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/register' element = {<Register/>}/>
          <Route path = '/profile' element = {<UserProfile/>}/>
          <Route path = '/item/:id' element = {<SingleProduct/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App;
