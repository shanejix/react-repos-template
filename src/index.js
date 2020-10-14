import React from "react";
import { render } from "react-dom";
import Home from "./views/home";

const RENDER_CONTAINER = document.getElementById("app");

render(<Home />, RENDER_CONTAINER);
