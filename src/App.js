import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HopePage from "./Components/Homepage/HopePage";
import NavBar from "./Components/Navbar/Navbar";
import AboutScreen from "./Screens/AboutScreen/AboutScreen";
import ContactScreen from "./Screens/contactUs/ContactScreen";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <NavBar />

      <Routes>
        <Route path="/" element={<HopePage />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/contact" element={<ContactScreen />}></Route>
      </Routes>

      <header className="App-header"> </header>

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
