import logo from "./logo.svg";
import "./styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Quality from "./components/Quality";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Booking />
      <Quality />
      <Footer />
    </div>
  );
}

export default App;
