import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Auth0Provider
        domain="dev-5grpoa8p7m22eqjz.us.auth0.com"
        clientId="z19eWD1KJTso42fDQPRS6dqxN8yqbRMJ"
        authorizationParams={{
          redirect_uri: "http://localhost:5173",
        }}
        audience="http://localhost:8000"
        scope="openid profile email"
        >
        <App />
      </Auth0Provider>
  </React.StrictMode>
);
