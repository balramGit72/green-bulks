import { Layout, theme } from 'antd';
import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
// import Contact from './Contact';
const { Content } = Layout;


const ContentTest = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <>
    <Content
            style={{
              // margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
       <Route path="/about" component={<About />} />
     {/* <Route path="/contact" component={<Contact />} /> */}
            </Routes>
          </Content>
    </>
  )
}


export default ContentTest;