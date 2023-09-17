// App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TopVideo from "./components/topvideo";
import Card from "./components/cards";
import Footer from "./components/foooooooooot";
// import Crousel from "./components/crousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <TopVideo />
        {/* <Crousel /> */}
        <div>
          <h1 className="servicesheading">Services</h1>
          <div className="cards-container">
            <Card />
          </div>
          < Footer />
        </div>

      </main>
    </div>
  );
}

export default App;
