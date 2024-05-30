import React from "react";
import { createRoot } from "react-dom/client";
import { App as Entry } from "./App";

const root = document.getElementById("root");
const reactDom = createRoot(root);

reactDom.render(<Entry />);

console.log('testing on backend')
