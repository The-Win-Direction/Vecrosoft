// import React from 'react';
// import { Link } from 'react-router-dom';
// import './SideBar.css';
// import { FaSearch, FaBookmark, FaAd, FaInfoCircle, FaEllipsisH } from 'react-icons/fa';

// const Sidebar = ({ isOpen, closeSidebar }) => {
//   const handleLinkClick = () => {
//     closeSidebar();
//   };

//   return (
//     <div className='sidebar-main'>

//     <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
//       <div className="sidebar-mobile-container">
//         <div className="search-bar">
//           <input type="text" placeholder="Search..." />
//           <button className="search-button"><FaSearch /></button>
//         </div>
//         <nav className="sidebar-nav">
//           <Link to="/article" className="sidebar-link" onClick={handleLinkClick}>
//             <FaBookmark /> Saved
//           </Link>
//           <Link to="/ads" className="sidebar-link" onClick={handleLinkClick}>
//             <FaAd /> Ads
//           </Link>
//           <Link to="/about-us" className="sidebar-link" onClick={handleLinkClick}>
//             <FaInfoCircle /> About Us
//           </Link>
//           <Link to="/" className="sidebar-link" onClick={handleLinkClick}>
//             <FaEllipsisH /> See More
//           </Link>
//         </nav>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Sidebar;
