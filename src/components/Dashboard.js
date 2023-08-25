// // App.js

// import React from 'react';
// // import { Routers, Route } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom"
// import Home from './components/Home';
// import About from './components/About';
// // import Contact from './components/Contact';
// // import NotFound from './components/NotFound';
// import Navbar from './components/Navbar';
// import { Layout } from 'antd';
// import Sidebar from './components/Sidebar';

// const App = () => {
//   return (
//     <>
//     <Layout>
//         {/* <Navbar /> */}
//         <Sidebar />
//         <Routes>
//       <Route exact path="/" element={<Home />}></Route>
//       <Route path="/about" component={<About />} />
//       {/* <Route path="/contact" component={<Contact />} /> */}
//       {/* <Route component={NotFound} /> */}
//     </Routes>
//     </Layout>
//     </>
//   );
// };

// export default App;



import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link } from 'react-router-dom';
// import ContentTest from './';

const { Header, Sider, Footer } = Layout;


const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout style={{ width: '100vw', height: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/">Employee list</Link> 
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/">Contact</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleCollapsed}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          {/* <ContentTest /> */}
          <Footer style={{ textAlign: 'center' }}>Your Footer Content Here</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
