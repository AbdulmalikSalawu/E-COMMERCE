import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Login from './Components/Login';
import Product from './Components/Product';
import Signup from './Components/Signup';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/nav' element={<Navbar />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/product' element={<Product />}>
            <Route path=':productid' element={<Product />}/>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/men' element={<Shopcategory />}></Route>
        <Route path='/kids' element={<Shopcategory />}></Route>
        {/* <Route path='*' element={<Nomatch />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
