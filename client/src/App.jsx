import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Listing from './pages/Listing';
import Search from './pages/Search';
import LikedProducts from './pages/LikedProducts';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        
        
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/liked-products' element={<LikedProducts />}/>
        <Route path='/listing/:listingId' element={<Listing/>}></Route>
        <Route element={<PrivateRoute/>}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/create-listing' element={<CreateListing/>} />
          <Route path='/update-listing/:listingId' element={<UpdateListing/>}></Route>
        </Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}