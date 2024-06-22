import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Login from './Components/Login';
import Product from './Components/Product';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import Shopcategory from './Components/Shopcategory';
import Heropage from './Components/Heropage';

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
        <Route path='/product' element={<Product />}>
            <Route path=':productid' element={<Product />}/>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/men' element={<Shopcategory />}></Route>
        <Route path='/kids' element={<Shopcategory />}></Route>
        <Route path='/women' element={<Shopcategory />}></Route>
        {/* <Route path='*' element={<Nomatch />}></Route> */}
        {/* <Footer /> */}
      </Routes>
    </div>
  );
}

export default App;
