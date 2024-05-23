import React from "react";
import { createRoot } from "react-dom/client";
import { App as Entry} from "./App"; //change

const root = document.getElementById("root");
const reactDom = createRoot(root);

reactDom.render(<Entry />); //change

console.log('test on backend')
