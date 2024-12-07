import Home from "./Components/Home";
import Services from "./Services/Services";
import Features from "./Components/Features";
import Learn from "./Components/Learn";
import Faq from "./Components/Faq";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100">
        <Home />
        <Services />
        <Features />
        <Learn />
        <Faq />
        <About />
        <Footer />
      </div>
    </>
  );
}
export default App;
