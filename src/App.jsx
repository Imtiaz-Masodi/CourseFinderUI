import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./cart/HomePage";
import Cart from "./cart/Cart";
import CartContextWrapper from "./cart/context/CartContext";
// import Events from "./Sections/Events";
// import Footer from "./Sections/Footer";
// import Hero from "./Sections/Hero";
// import Promotion from "./Sections/Promotion";
// import Services from "./Sections/Services";
// import Testimonials from "./Sections/Testimonials";
// import Updates from "./Sections/Updates";

function App() {
  {
    /* <Hero />
      <Services />
      <Promotion />
      <Events />
      <Testimonials />
      <Updates />
      <Footer /> */
  }
  return (
    <BrowserRouter>
      <CartContextWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextWrapper>
    </BrowserRouter>
  );
}

export default App;
