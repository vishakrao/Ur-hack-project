import "./components/style.css";
import "./components/Header.css";
import Header from "./components/Header"
import Navbar1 from "./components/Navbar1";
import CardWrapper from "./components/CardWrapper"
import MyNavbar from "./components/MyNavbar"
export default function App() {
  return (
    <>
      <div className="Header">
        <MyNavbar/>
      </div>
      <div className="main-cover">
      <div>
        <Navbar1/>
      </div>
      <div className="grid-wrap">
        <CardWrapper/>
      </div>
    </div>
    </>
  );
}
