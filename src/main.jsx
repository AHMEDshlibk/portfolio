import ReactDOM from "react-dom/client";
import MainLayout from "./layout/MainLayout";

// redux
import { Provider } from "react-redux";
import store from "./store";

//style
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MainLayout />
  </Provider>
);
