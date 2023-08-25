// // Navbar.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//     </>
//   );
// };

// export default Navbar;



// Header.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"> <Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/contact">Contact</Link></Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;