import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Doctors from "./components/Doctors";
import Credentials from "./components/Credentials";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AppointmentModal from "./components/AppointmentModal";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Doctors />
        <Credentials />
        <Location />
        <Contact />
      </main>

      <Footer />

      {/* Floating appointment booking */}
      <AppointmentModal />
    </>
  );
}

export default App;