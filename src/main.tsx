import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="439a0a6c70fe41ca8b7267b44b5eba81"
      domain="https://faisalahmadi.kinde.com"
      redirectUri={
        process.env.NODE_ENV === "production"
          ? "https://todo-app-by-faisal.netlify.app"
          : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV === "production"
          ? "https://todo-app-by-faisal.netlify.app"
          : "http://localhost:5173"
      }
      isDangerouslyUseLocalStorage={true}
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>,
);
