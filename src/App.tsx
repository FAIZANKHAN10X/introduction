import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnalyticsTracker from "./AnalyticsTracker";
import ScrollToHash from "./app/ScrollToHash";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
