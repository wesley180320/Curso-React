import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Empresa from "./Pages/Empresa";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    // <Router>
    //   <ul>
    //     <li>
    //       <Link to="/"> Home </Link>
    //     </li>

    //     <li>
    //       <Link to="/empresa"> Empresa </Link>
    //     </li>

    //     <li>
    //       <Link to="/contato"> Contato </Link>
    //     </li>
    //   </ul>

    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //   </Routes>

    //   <Routes>
    //     <Route path="/empresa" element={<Empresa />}></Route>
    //   </Routes>

    //   <Routes>
    //     <Route path="/contato" element={<Contato />}></Route>
    //   </Routes>
    // </Router>

    <div>

     <Footer/>

    </div>
  
  );
}

export default App;
