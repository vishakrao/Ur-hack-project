import "./components/style.css";
import "./components/Header.css";

import Product from "./components/product";
import Header from "./components/Header"
import Navbar1 from "./components/Navbar";

export default function App() {
  return (
    <div>
      <div className="Header">
      <Header/>
      </div>
      <div className="main-cover">
      <div>
      <Navbar1/>
      </div>
      <div className="grid-wrap">
      <Product/> <Product/> <Product/> <Product/> <Product/>
      <Product/> <Product/> <Product/> <Product/> <Product/>
      <Product/> <Product/> <Product/> <Product/> <Product/>
      <Product/> <Product/> <Product/> <Product/> <Product/>
      <Product/> <Product/> <Product/> <Product/>

      </div>
    </div>
    </div>
  );
}
