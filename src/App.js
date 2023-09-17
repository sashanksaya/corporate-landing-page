// App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TopVideo from "./components/topvideo";
import Card from "./components/cards";
import background from './images/background.jpg';
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
            <Card
              title="Service 1"
              description="Description of Service 1 goes here."
              background={background}
            />
            <Card
              title="Service 2"
              description="Description of Service 2 goes here."
              background={background}
            />
            <Card
              title="Service 3"
              description="Description of Service 3 goes here."
              background={background}
            />
            <Card
              title="Service 3"
              description="Description of Service 3 goes here."
              background={background}
            />
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
