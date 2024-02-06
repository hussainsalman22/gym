import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import BlogComponent from "./components/blog";
import Footer from "./components/Footer";


function App() {
    return (
        <>
          <BrowserRouter>

                <Header />
                
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path='/Gallery' element={<Gallery />}></Route>
                    <Route path='/Aboutus' element={<Aboutus />}></Route>
                    <Route path='/Contactus' element={<Contactus />}></Route>
                    <Route path='/Blog' element={<BlogComponent />}></Route>

                </Routes>
                

                <Footer/>
                </BrowserRouter>
            
        </>
    )



}



export default App;
