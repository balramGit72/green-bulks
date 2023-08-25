// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import PublicHeader from "./publicComponents/header/Header";
import PublicFooter from "./publicComponents/footer/Footer";
import PublicHome from "./publicComponents/home/Home";

const { Header, Content, Footer } = Layout;

const App = () => {
  const count = useSelector((state) => state.counter);
  return !count.token ? (
    <Layout>
      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{
            height: "650px",
            "margin-top": "10%",
          }}
        >
          <Routes>
            {/* <Route exact path="/Home" element={<Login />} /> */}
            <Route exact path="/" element={<Login />} />
            {/* <Route exact path="/dashor" component={Home} /> */}
          </Routes>
        </div>
      </Content>
    </Layout>
  ) : (
      <Layout>
        <PublicHeader />
    <Routes>
        <Route exact path="/" element={<PublicHome />} />
        {/* <Route exact path="/*" element={<ContentTest />} /> */}
    </Routes>
    <PublicFooter />
      </Layout>
  );
};

export default App;
