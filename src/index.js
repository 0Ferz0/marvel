import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss"
import MarvelService from "./services/MarvelServices";




const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);


