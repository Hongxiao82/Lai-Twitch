import React from "react";
import { Layout } from "antd";
import Login from "./components/Login";
import PageHeader from "./components/PageHeader";

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout>
      <PageHeader />
      <Layout>
        <Sider width={300} className="site-layout-background">
          {"Sider"}
        </Sider>
        <Layout style={{ padding: "24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              height: 800,
              overflow: "auto",
            }}
          >
            {"Home"}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
