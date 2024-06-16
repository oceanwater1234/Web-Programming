import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider ,  QueryClient } from 'react-query';
import ReactDOM from "react-dom/client";

import App from "./pages/App";
import "./styles/all.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
