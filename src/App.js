import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage.js";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Header />
      <main className="container mt-4">
      <Routes>
  <Route path="/nail-studio" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/booking" element={<BookingPage />} />
  <Route path="*" element={<h2>404 - Page Not Found</h2>} /> {/* Keep last */}
</Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
