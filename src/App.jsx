import React, { useEffect } from "react";
import { defaultConfig } from "./configs";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import Breadcrumb from "./components/Breadcrumb";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useDispatch } from "react-redux";
import { setConfig } from "./redux/data-reducer";
import Modals from "./components/Modals";
import { useClassNames } from "./helpers";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./styles/index.css";

const Init = ({ userConfig }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setConfig({
        ...defaultConfig,
        ...userConfig,
        blocks: [...defaultConfig.blocks, ...userConfig.blocks],
      })
    );
  }, [userConfig]);

  return <></>;
};

const App = ({ userConfig }) => {
  return (
    <Provider store={store}>
      <Init userConfig={userConfig} />
      <DndProvider backend={HTML5Backend}>
        <Layout
          slotHeader={<Header />}
          slotSidebar={<Sidebar />}
          slotBreadcrumb={<Breadcrumb />}
          slotModals={<Modals />}
        />
      </DndProvider>
    </Provider>
  );
};

export default App;
