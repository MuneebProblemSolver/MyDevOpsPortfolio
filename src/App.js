import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Experience from './components/Experience/Experience';


function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <br></br>
      <Reasons />
   <br></br>
   <Experience />
      <Plans />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
