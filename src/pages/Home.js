import "../styles/index.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Booking from "../components/Booking";
// import Error from "../components/Error";
// import Banner from "../components/Banner";
// import Popular from "../components/Popular";
// import Quality from "../components/Quality";
// import Recommended from "../components/Recommended";
// import New from "../components/New";
// import Regulation from "../components/Regulation";
// import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="wrapper">
            <Header />
            <Hero />
            <Booking />
            {/* <Error />
            <Banner />
            <Popular />
            <Quality />
            <Recommended />
            <New />
            <Regulation />
            <Footer /> */}
        </div>
    )
}