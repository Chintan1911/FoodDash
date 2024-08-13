import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Menu from './pages/Menu/Menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './pages/MyOrders/MyOrders';
import Verify from './pages/Verify/Verify'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
        <ToastContainer/>

      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders />}/>      
          <Route path='/menu' element={<Menu />} /> {/* Define the route */}
          <Route path='/verify' element={<Verify />}/>

        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
