import "./App.css";
import "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import Questionnaire from "./pages/Questionnaire";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
          <Route path= "/questionnaire" element={<Questionnaire />} />
      </Routes>
    </>
  );
}

export default App;
