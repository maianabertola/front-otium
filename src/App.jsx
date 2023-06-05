import "./App.css";
import "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import Questionnaire from "./pages/QuestionnairePage";
import LoginPage from "./pages/LoginPage";
import VillaPage from "./pages/VillaPage";
import SignupPage from "./pages/SignupPage";
import AccountCreatedPage from "./pages/AccountCreatedPage";
import Account from "./pages/LoggedIn"
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/villa/:id" element={<VillaPage />} />
        </Route>
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/auth">
          <Route path="signup" element={<SignupPage />} />
          <Route path="accountcreated" element={<AccountCreatedPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/account" element={<Account />} />

      </Routes>
    </>
  );
}

export default App;
