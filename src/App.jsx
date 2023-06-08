import "./App.css";
import "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import Questionnaire from "./pages/QuestionnairePage";
import Created from "./pages/QuestionnaireCreated";
import LoginPage from "./pages/LoginPage";
import VillaPage from "./pages/VillaPage";
import SignupPage from "./pages/SignupPage";
import AccountCreatedPage from "./pages/AccountCreatedPage";
import Account from "./pages/LoggedIn";
import BookingPage from "./pages/BookingPage";
import ConfirmationBookingPage from "./pages/ConfirmationBookingPage";
import GalleryPhotos from "./pages/GalleryPhotos";
import QuestionnaireUpdate from "./pages/QuestionnaireUpdate";
import AccountTripBooked from "./pages/AccountTripBooked";
import BookingPageEdit from "./pages/BookingPageEdit";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/villa/:id" element={<VillaPage />} />

          <Route path="photos" element={<GalleryPhotos />} />
          <Route path="/villa/:id/booking" element={<BookingPage />} />
          <Route path="/booking/:id" element={<BookingPageEdit />} />
          <Route
            path="/booking-confirmed"
            element={<ConfirmationBookingPage />}
          />
          <Route path="/account-trips" element={<AccountTripBooked />} />
        </Route>

        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/questionnaire/:id" element={<QuestionnaireUpdate />} />
        <Route path="/created" element={<Created />} />
        <Route path="/auth">
          <Route path="signup" element={<SignupPage />} />
          <Route path="accountcreated" element={<AccountCreatedPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </>
  );
}

export default App;
