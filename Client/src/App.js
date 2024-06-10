import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Article from './Pages/Article/Article';
import AI from './Pages/AI/AI';
import Chat from './Pages/Chat/Chat';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Article' element={<Article />} />
        <Route path='/Ai' element={<AI />} />
        <Route path='/Chat' element={<Chat />} />
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        
       
      
      </Routes>
      <Footer />
    </>
  );
}
export default App;

