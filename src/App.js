import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import { Features } from "./components/Features";
import { Workflow } from "./components/Workflow";
import { Pricing } from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Workflow />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
