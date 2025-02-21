import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Event from "./pages/events/Event";
import "./test.scss";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    // <Router>
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Event />} />
    //     </Routes>
    //   </Layout>
    // </Router>
    <div class="profile-card">
  <div class="profile-img">
    <img src="https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg" alt="Photo de profil" />
  </div>
  <div class="profile-info">
    <h2>Student</h2>
    <p>UI/UX Designer & Frontend Developer</p>
    <button class="btn-primary">Contact</button>
  </div>
</div>
  );
}

export default App;
