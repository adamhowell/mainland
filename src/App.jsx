import React, { useEffect } from "react";
import { defaultConfig } from "./configs";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useDispatch } from "react-redux";
import { setConfig } from "./redux/data-reducer";

import "./styles/index.css";

const Init = ({userConfig}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConfig({ ...defaultConfig, ...userConfig }));
  }, [userConfig]);

  return <></>;
};

const App = ({userConfig}) => {
  return (
    <Provider store={store}>
      <Init userConfig={userConfig} />
      <Layout
        slotHeader={<Header />}
        slotSidebar={<Sidebar />}
        slotCanvas={<Canvas />}
      />
    </Provider>
  );
};

export default App;
