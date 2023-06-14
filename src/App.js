import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Products from './Component/Products/Products';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
      <Contact/>
   
    </div>
  );
}

export default App;
