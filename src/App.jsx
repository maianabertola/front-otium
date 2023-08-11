import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout/Layout";
import Questionnaire from "./pages/QuestionnairePage";
import Created from "./pages/QuestionnaireCreated";
import LoginPage from "./pages/LoginPage";
import VillaPage from "./pages/VillaPage";
import SignupPage from "./pages/SignupPage";
import AccountCreatedPage from "./pages/AccountCreatedPage";
import BookingPage from "./pages/BookingPage";
import ConfirmationBookingPage from "./pages/ConfirmationBookingPage";
import GalleryPhotos from "./pages/GalleryPhotos";
import QuestionnaireUpdate from "./pages/QuestionnaireUpdate";
import Protected from "./pages/ProtectedRoutes";
import BookingPageEdit from "./pages/BookingPageEdit";
import VillasCollectionPage from "./pages/VillasCollectionPage";
import ServicesCollectionPage from "./pages/ServicesCollectionPage";
import ServicePage from "./pages/ServicePage";
import LogginPageRedirection from "./pages/LoginPageRedirection";
import LoggedIn from "./pages/LoggedIn";
import ProtectedNavRoutes from "./pages/ProtectedNavRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/service/:id" element={<ServicePage />} />
          <Route path="/villa/:id" element={<VillaPage />}></Route>
          <Route path="/villa/:id/photos" element={<GalleryPhotos />} />
          <Route path="/villas-collection" element={<VillasCollectionPage />} />
          <Route
            path="/services-collection"
            element={<ServicesCollectionPage />}
          />
        </Route>

        <Route element={<Protected />}>
          <Route path="/villa/:id/booking" element={<BookingPage />} />
          <Route path="/booking/:id" element={<BookingPageEdit />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/questionnaire/:id" element={<QuestionnaireUpdate />} />
        </Route>

        <Route element={<ProtectedNavRoutes />}>
          <Route
            path="/booking-confirmed"
            element={<ConfirmationBookingPage />}
          />
          <Route path="/created" element={<Created />} />
          <Route path="/account" element={<LoggedIn />}></Route>
          <Route path="/auth/accountcreated" element={<AccountCreatedPage />} />
        </Route>

        <Route path="/auth">
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="need-login" element={<LogginPageRedirection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
