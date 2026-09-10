import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Matching from "./pages/matching";
import Footer from "./components/footer";
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
              <Footer />
            </>
          }
        />

        <Route path="/matching" element={<Matching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;