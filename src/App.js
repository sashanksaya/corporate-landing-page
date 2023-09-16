import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TopVideo from "./components/topvideo";
import Card from "./components/cards";

function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  return (
    <div className="App">
      <Navbar />
      <main>
        <TopVideo />
        <Card />
      </main>
    </div>
  );
}

export default App;
