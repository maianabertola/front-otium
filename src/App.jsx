import "./App.css";
import "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import Questionnaire from "./pages/Questionnaire";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    // faire les routes protégées avec mayo
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/login" element={<LoginPage />} />
            
          
          {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
