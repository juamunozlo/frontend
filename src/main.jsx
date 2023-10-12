import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter, HashRouter } from "react-router-dom";
import HomeRoutes from "./home/routes/HomeRoutes.jsx";
import PersistentDrawerLeft from "./home/components/Sidebar.jsx";
import "./App.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HashRouter>
      <PersistentDrawerLeft>
        <HomeRoutes />
      </PersistentDrawerLeft>
    </HashRouter>
  </Provider>
);
