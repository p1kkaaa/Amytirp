import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ⬅️ импортируем роутер
import App from "./App";
import './styles/comon.css';
import './styles/reset.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
