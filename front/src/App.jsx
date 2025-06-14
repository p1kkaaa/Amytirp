import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/about/About";
import Europe from "./components/europetour/Europe";
import Footer from "./components/footer/Footer";
import Gid from "./components/Gid/Gid";
import Header from "./components/header/Header";
import Parallax from "./components/parallax/Parallax";
import Requisite from "./components/requsite/Requisite";
import Review from "./components/review/Review";
import Tour from "./components/tour/Tour";
import Easteu from "./components/page/easteu/Easteu";
import Gidpage from "./components/page/gidpage/Gidpage";
import Tourbali from "./components/page/tour-bali/Tour-bali";
import Westeu from "./components/page/westeu/Westeu";
import Southeu from "./components/page/southeu/Southeu";
import Tourtailand from "./components/page/tour-tailand/Tour-tailand";
import Tourdubai from "./components/page/tour-dubai/Tour-dubai";
import LoginRegistr from "./components/page/login-registr/LoginRegistr";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";


function MainPage() {
  return (
    <>
      <Header />
      <Parallax />
      <Tour />
      <Gid />
      <Europe />
      <About />
      <Review />
      <Requisite />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/easteu" element={<Easteu />} />
            <Route path="/southeu" element={<Southeu />} />
            <Route path="/westeu" element={<Westeu />} />
            <Route path="/gidpage" element={<Gidpage />} />

            {/* Защищённые маршруты */}
            <Route
              path="/tour-bali"
              element={
                <PrivateRoute>
                  <Tourbali />
                </PrivateRoute>
              }
            />
            <Route
              path="/tour-tailand"
              element={
                <PrivateRoute>
                  <Tourtailand />
                </PrivateRoute>
              }
            />
            <Route
              path="/tour-dubai"
              element={
                <PrivateRoute>
                  <Tourdubai />
                </PrivateRoute>
              }
            />

            {/* Публичный маршрут */}
            <Route path="/loginregistr" element={<LoginRegistr />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
