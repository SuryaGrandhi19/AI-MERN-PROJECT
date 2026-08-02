import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";

// Global Styles
import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/responsive.css";

// Authentication Context
import AuthProvider from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
                <Toaster/>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);