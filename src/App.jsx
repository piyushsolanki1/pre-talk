import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Matching from "./pages/matching";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<><LandingPage />  
          <Footer /> </> }/>

        <Route path="/matching" element={<Matching />} />
        <Route path="/HomePage" element={<HomePage />} />
<Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
