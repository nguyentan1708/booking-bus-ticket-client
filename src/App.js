import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Footer from "./components/Footer";
import New from "./pages/New";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}
export default App;