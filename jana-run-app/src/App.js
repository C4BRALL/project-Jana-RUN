import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import WppGroup from "./pages/WppGroup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={ <Home /> }></Route>
        <Route path="/wpp" element={ <WppGroup /> }></Route>
        <Route path="/contact" element={ <Contact /> }></Route>
        <Route path="*" element={ <NotFound /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
