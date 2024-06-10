import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import Transaction from "./components/Transaction/Transaction";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
      </div>
      <Transaction />
      <Footer />
    </>
  );
}

export default App;
