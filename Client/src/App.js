import React from 'react';
import Error from './Pages/Error/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Article from './Pages/Article/Article';
import AI from './Pages/AI/AI';
import SignUp from './Pages/SignUp/SignUp';
import Chat from './Pages/Chat/Chat'
import SignIn from './Pages/SignIn/SignIn';
import FullArticle from './Components/FullArticle/FullArticle';
import './App.css';
import CreatePost from './Pages/CreatePost/CreatePost';
import ContactUs from './Pages/ContactUs/ContactUs';
import PredictionResult from './Pages/PredictionResult/PredictionResult';
import ParentComponent from './Components/ParentHeader/ParentComponent';
import './index.css';
import ParentComponentHeader from './Components/ParentHeader/ParentComponent';

function App() {   
  return (
      <div className="app-container"> 
        {/* <Header /> */}
        <ParentComponentHeader/>
        <div className="content-container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/article' element={<Article />} />
              <Route path='/ai' element={<AI />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path="/article/:articleId" element={<FullArticle/>} />
              <Route path="/create-post" element={<CreatePost/>} />
              <Route path="/contact-us" element={<ContactUs/>} />
              <Route path="/prediction" element={<PredictionResult />} />
              <Route path='*/' element={<Error/>}/>
            </Routes>
          </div>
      </div>
   
  );

}

export default App;
