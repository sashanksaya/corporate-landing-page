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
      <div className="navbar">
      <Navbar />
      </div>
      
      <main>
        <TopVideo />
        {/* <Crousel /> */}
        <h1 className="servicesheading" id="servicesheading">Services</h1>
        <div className="cards-container" id="cards-container">
          <Card />
        </div>
        <div className="upbutton">
          <Upbutton />
        </div>

        <div className="team" id="team">
          <h1 className="us">About Us</h1>
          <TeamSection />
        </div>
        <div className="scrolling" id="scrolling">
          <h1 className="clientsheading">Our Clients</h1>
          <Scroll />
        </div>
        <div id="footer">
        <Footer />
        </div>
        
      </main>
    </div>
  );
}

export default App;
