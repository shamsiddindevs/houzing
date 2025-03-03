import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

let a = 45

createRoot(document.getElementById("root")).render(
    <App text="salom" digit = {a} />
);
