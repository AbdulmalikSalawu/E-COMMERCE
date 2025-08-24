import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Login from './Components/Login';
import Product from './Components/Product';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Cart from './Components/Cart';
import Shopcategory from './Components/Shopcategory';
import Heropage from './Components/Heropage';
import kidscategory from './Assets/kidscategory.png'
import womencategory from './Assets/womencategory.png'
import mencategory from './Assets/mencategory.png'
import gadgetBanner from './Assets/gadgetBanner.png'
import beautyBanner from './Assets/beautyBanner.png'
import AddProduct from './Components/AddProduct';
import NewCollections from './Components/NewCollections';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
       <Routes>
        <Route path='/' element={<Heropage />}></Route>
        <Route path='/nav' element={<Navbar />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/heropage' element={<Heropage />}></Route>
        <Route path='/newcollections' element={<NewCollections />}></Route>
        <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/addproduct' element={<AddProduct />}></Route>
        <Route path='/men' element={<Shopcategory banner={mencategory} category="men" />}></Route>
        <Route path='/kids' element={<Shopcategory banner={kidscategory} category="kid" />}></Route>
        <Route path='/women' element={<Shopcategory banner={womencategory} category="women" />}></Route>
        <Route path='/gadgets' element={<Shopcategory banner={gadgetBanner} category="gadgets" />}></Route>
        <Route path='/beauty' element={<Shopcategory banner={beautyBanner} category="beauty" />}></Route>
        {/* <Route path='*' element={<Nomatch />}></Route> */}
        {/* <Footer /> */}
      </Routes>
    </div>
  );
}

export default App;
