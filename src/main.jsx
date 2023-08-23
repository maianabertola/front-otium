import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextWrapper } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { BookingContextWrapper } from "./context/BookingContext";
import { ParallaxProvider } from "react-scroll-parallax";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BookingContextWrapper>
          <AuthContextWrapper>
            <ParallaxProvider>
              <App />
            </ParallaxProvider>
          </AuthContextWrapper>
        </BookingContextWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
