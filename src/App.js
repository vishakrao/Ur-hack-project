import "./components/style.css";
import "./components/Header.css";
import Header from "./components/Header";
import Navbar1 from "./components/Navbar";
import CardWrapper from "./components/CardWrapper";
import BasicSlider from "./Slider.js";
import "./index.css";

export default function App() {
  return (
    <div>
      <div className="Header">
        <Header />
        <BasicSlider />
      </div>
      <div className="main-cover">
        <div>
          <Navbar1 />
        </div>
        <div className="grid-wrap">
          <CardWrapper />
        </div>
      </div>
    </div>
  );
}
