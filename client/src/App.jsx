// React library import kar rahe hain
import React from 'react'

// Navbar component import kiya jo app ke top pe dikhai deta hoga
import Navbar from './components/Navbar'

// Routing ke liye react-router-dom se kuch cheezein import ki gayi hain:
// Route, Routes – for defining paths
// useLocation – current URL path ko jaanne ke liye
import { Route, Routes, useLocation } from 'react-router-dom'

// Home page component import kiya
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';

const App = () => {

  // useLocation() se current URL path mila, usme check kiya ki kya "owner" shabd hai ya nahi
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
        {/* Agar current path me "owner" nahi hai tabhi Navbar dikhayenge */}
        {!isOwnerPath && <Navbar />}

        {false &&<HotelReg />}

        {/* Yeh div minimum height set karta hai taaki page thoda structured lage */}
        <div className='min-h-[70vh]'>
          
          {/* Routes ke andar different pages ke liye paths define karte hain */}
          <Routes>
            {/* "/" path par jab user aayega, tab Home component dikhai dega */}
            <Route path='/' element={<Home />} />
            {/* Jab user website par /rooms wala page open karega, tab AllRooms component screen par show hoga. */}
            <Route path='/rooms' element={<AllRooms />} />
            {/* Jab URL me /rooms/ ke baad kuch bhi likha ho (jaise ek number ya ID),
toh RoomDetails naam ka component open hoga, jisme us room ki detail dikhayi jayegi.*/}
            <Route path='/rooms/:id' element={<RoomDetails />} />

            <Route path='/my-bookings' element={<MyBookings />} />

            <Route path='/owner' element={<Layout />}>
                  <Route index element={<Dashboard/>} />
                  <Route path='add-room' element={<AddRoom/>} />
                  <Route path='list-room' element={<ListRoom/>} />

            </Route>
          </Routes>

        </div>
        <Footer />
    </div>
  )
}

// App component ko export kiya jaa raha hai taaki index.js ya kisi aur jagah se use kiya ja sake
export default App
