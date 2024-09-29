// import React from "react";
// import Error from "./Pages/Error/Error";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./SpecialRoutes/ProtectedRoutes";
// import GuestRoute from "./SpecialRoutes/GuestRoutes";
// import Home from "./Pages/Home/Home";
// import AboutUs from "./Pages/AboutUs/AboutUs";
// import Article from "./Pages/Article/Article";
// import AI from "./Pages/AI/AI";
// import SignUp from "./Pages/SignUp/SignUp";
// import Chat from "./Pages/Chat/Chat";
// import SignIn from "./Pages/SignIn/SignIn";
// import FullArticle from "./Components/FullArticle/FullArticle";
// import "./App.css";
// import CreatePost from "./Pages/CreatePost/CreatePost";
// import CreateArticle from "./Pages/CreateArticle/CreateArticle";
// import ContactUs from "./Pages/ContactUs/ContactUs";
// import PredictionResult from "./Pages/PredictionResult/PredictionResult";
// import ParentComponent from "./Components/ParentHeader/ParentComponent";
// import "./index.css";
// import ParentComponentHeader from "./Components/ParentHeader/ParentComponent";
// import JoinCommunity from "./Components/JoinCommunity/JoinCommunity";
// import TermsOfService from './Pages/TermsOfService/TermsOfService';
// import GeneralTermsAndConditons from './Pages/GeneralTermsAndConditions/GeneralTermsAndConditions';
// import CookiePolicy from './Pages/CookiePolicy/CookiePolicy';
// import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
// import UserProfile from "./Pages/UserProfile/UserProfile";
// import Ads from "./Pages/Ads/Ads";
// import HelpAndSupport from "./Pages/HelpAndSupport/HelpAndSupport";
// function App() {
//   return (
//     <div className="app-container">
//       <ParentComponentHeader />
//       <div className="content-container">
//         <Routes>
//           <Route element={<ProtectedRoute />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/about-us" element={<AboutUs />} />
//             <Route path="/article/*" element={<Article />} /> 
//             <Route path="/ai" element={<AI />} />
//             <Route path="/chat" element={<Chat />} />
//             <Route path="/article/:articleId" element={<FullArticle />} />
//             <Route path="/create-post" element={<CreatePost />} />
//             <Route path="/create-article" element={<CreateArticle/>} />
//             <Route path="/contact-us" element={<ContactUs />} />
//             <Route path="/prediction" element={<PredictionResult />} />
//             <Route path="/joincommunity" element={<JoinCommunity />} />
//             <Route path='/terms-of-service' element = {<TermsOfService/>} /> 
//             <Route path="/general-terms-and-conditions" element={<GeneralTermsAndConditons />} />
//             <Route path="/cookie-policy" element={<CookiePolicy />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
//             <Route path="/your-profile" element={<UserProfile />} /> 
//             <Route path="/ads" element={<Ads />} /> 
//             <Route path="/help-and-support" element={<HelpAndSupport />} /> 

//           </Route>
//           <Route element={<GuestRoute />}>
//             <Route path="/sign-up" element={<SignUp />} />
//             <Route path="/sign-in" element={<SignIn />} />
//             </Route>
//             <Route path="*" element={<Error />} />

//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
