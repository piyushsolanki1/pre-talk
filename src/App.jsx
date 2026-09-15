import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Matching from "./pages/matching";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
             
            </>
          }
        />

        <Route path="/matching" element={<Matching />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
