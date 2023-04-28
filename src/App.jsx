import React from "react";
import { defaultConfig } from "../configs";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import "./styles/index.css"

const App = ({ userConfig }) => {
  const { bloks } = userConfig;

  return <Layout
      slotHeader={<Header/>}
      slotSidebar={<Sidebar/>}
      slotCanvas={<Canvas/>}
    />
};

export default App;
