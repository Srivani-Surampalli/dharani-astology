import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/scollToTop";
import TodayPanchang from "./components/PanchangScroller";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />

      <Navbar />
      <TodayPanchang />

      <main className="flex-1">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;