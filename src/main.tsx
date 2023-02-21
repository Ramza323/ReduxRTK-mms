import React from "react";
import AllowUsers, { REGULARS } from "@/HOCs/AuthHOC";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "@/Components/Login";
import DashboardComponent from "@/Components/Dashboard";
import ProfileComponent from "@/Components/Profile";
import { Provider } from "react-redux";
import { store } from "@/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "@/index.css";

const AppLayout: React.FC = () => (
  <>
    <Routes>
      <Route index path="/" element={<LoginComponent />} />
      <Route index path="/dashboard" element={<DashboardComponent />} />
      <Route index path="/profile" element={<ProfileComponent />} />
    </Routes>
  </>
);

const GateKeeper: any = AllowUsers(REGULARS, AppLayout, LoginComponent);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="580019845566-9jkf1bii7l4nj9spomgs7a49nc38891v.apps.googleusercontent.com">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<GateKeeper />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
