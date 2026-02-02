import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Progects from "./pages/Progects";
import Contacts from "./pages/Contacts";


function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Home /> */}
      <Progects />
      {/* <Contacts /> */}

      <Footer />
    </div>
  );
}

export default App;
