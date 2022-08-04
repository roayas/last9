import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './static/About';
import Contact from './static/Contact';


function App() {
  return (
<> 


<Nav/>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
{/* <Route path='/addproduct' element={<Upload/>}/>   */}

</Routes>

</BrowserRouter>
    <Footer/> 
    </>
  );
}

export default App;