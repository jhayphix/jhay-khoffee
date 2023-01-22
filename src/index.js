// ..... React modules
import reactDOM from "react-dom/client";

// ..... Components
import App from "./App";

// ..... Assets
import "./assets/css/style.css";

const root = reactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
