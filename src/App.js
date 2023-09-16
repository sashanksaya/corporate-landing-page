// App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import TopVideo from './components/topvideo';
import Services from './components/services';

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
        <Services/>
        
      </main>
    </div>
  );
}

export default App;
