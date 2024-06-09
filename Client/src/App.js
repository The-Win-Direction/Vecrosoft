import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Article from './Pages/Article/Article';
import AI from './Pages/AI/AI';
import Chat from './Pages/Chat/Chat';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/article' element={<Article />} />
        <Route path='/ai' element={<AI />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer />
    </>
  );
}
export default App;

