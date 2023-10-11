import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'react-calendar-timeline/lib/Timeline.css'

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
