import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import KeyFeatures from "./components/KeyFeatures";
import Gutter from "./components/common/Gutter";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="px-[8%]">
        <Navbar/>
        <Gutter/>
        <Hero/>
        <Gutter/>
        <KeyFeatures/>
        <Gutter/>
        <HowItWorks/>
        <Gutter/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
