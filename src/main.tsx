// Single page Application (SPA)

//Lifecycle hooks
// create/mount
//Updating- state,effect,api call, operations
//Unmount/unload

import ReactDOM from "react-dom/client";
import "./assets/css/styles.css";
import "./index.css";
// import Home from "./pages/Home";
import App from "./pages/App";
// const mainElement = document.getElementById("root"); // real DOM
// const rootElement = createRoot(mainElement!); // virtual DOM
// rootElement.render(<h1>Hello world</h1>);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    <App />
  </div>
);
