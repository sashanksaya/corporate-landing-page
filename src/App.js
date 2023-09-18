import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TopVideo from "./components/topvideo";
import Card from "./components/cards";
import Footer from "./components/footer";
import Scroll from "./components/scrolling";
import Upbutton from "./components/upbutton";
import TeamSection from "./components/teamsection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <TopVideo />
        {/* <Crousel /> */}
        <h1 className="servicesheading">Services</h1>
        <div className="cards-container">
          <Card />
        </div>
        <Upbutton />
        <div className="team" id="team">
          <h1 className="us">About Us</h1>
          <TeamSection />
        </div>
        <div className="scrolling">
          <h1 className="clientsheading">Portfolio</h1>
          <Scroll />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
