import './App.css';
// import Logo from "./images/icons_assets/Logo.svg"
import Header from "./components/Header"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route, Routes, RouterLink} from "react-router-dom";

function AppContent() {
  return (
    <>
      <Routes>
        <Route path="/menu" element={<Header />} />
      </Routes>
      <Header />
      
    </>
  )
}

function App() {
  return (
    <>
    <meta name="description" content="Little Lemon restuarant, a family owned business"/>
    <meta name="og:title" content="Little Lemon"/>
    <meta name="og:description" content="Little Lemon Restuarant"/>
    <meta name="og:image" content=""/>
    
    <Router>
      <AppContent/>
    </Router>
    

        <h1> HomePage</h1>
    
    <nav></nav>
    <main></main>
    <footer></footer>
    </>

  );
}

export default App;
