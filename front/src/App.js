import { BrowserRouter, Route ,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./home/Home";
import Add from "./add/Add";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<Add/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
