import "./components/style.css";
import "./components/Header.css";
import Navbar1 from "./components/Navbar1";
import CardWrapper from "./components/CardWrapper"
import MyNavbar from "./components/MyNavbar"
import "./index.css"

export default function App() {
  return (
    <div>
      <div className="Header">
        <MyNavbar/>
      </div>

      <div className="main-cover">
        <Navbar1/>
        <div className="grid-wrap">
          <CardWrapper/>
        </div>
    </div>
    </div>
  );
}
