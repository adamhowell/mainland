import React from "react";
import App from "./App.jsx";
import { createRoot } from 'react-dom/client';

export const init = (config) => {
  const target = config ? config.target ? config.target : "#mainland-widget" : "#mainland-widget";
  const domNode = document.querySelector(target);
  const root = createRoot(domNode);
  root.render(<App userConfig={{ ...config, target: document.querySelector(target) }} />);
}