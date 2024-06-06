import './App.css';
// import Logo from "./images/icons_assets/Logo.svg"
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Main from "./components/Main";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <meta name="description" content="Little Lemon restuarant, a family owned business"/>
    <meta name="og:title" content="Little Lemon"/>
    <meta name="og:description" content="Little Lemon Restuarant"/>
    <meta name="og:image" content=""/>
    
    <Router>
            <Nav />
            
            <Routes>
              
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<Main />} />
                {/* Add other routes as needed */}
            </Routes>
      </Router>
    
    
        
    
    
    </>

  );
}

export default App;
