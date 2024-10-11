import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeScreen/home.tsx";
import "./App.css"
import PageFem from "./components/photopages/index.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImageProvider } from "./components/hooks/hookContext.tsx";

function App() {
  return (
    <ImageProvider>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogoFeminino" element={<PageFem />} />
        </Routes>
      </Router>
    </ImageProvider>
  );
}

export default App;
