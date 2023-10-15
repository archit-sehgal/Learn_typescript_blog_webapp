import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AsideNav from "./components/AsideNav";
import "./App.css";
import components from "./components.tsx";

function App() {
  const {
    OneC,
    TwoC,
    ThreeC,
    FourC,
    FiveC,
    SixC,
    SevenC,
    EightC,
    NineC,
    TenC,
    ElevenC,
    TwelveC,
    ThirteenC,
  } = components;
  return (
    <Router>
      <Nav />
      <AsideNav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OneC" element={<OneC />} />
          <Route path="/TwoC" element={<TwoC />} />
          <Route path="/ThreeC" element={<ThreeC />} />
          <Route path="/FourC" element={<FourC />} />
          <Route path="/FiveC" element={<FiveC />} />
          <Route path="/SixC" element={<SixC />} />
          <Route path="/SevenC" element={<SevenC />} />
          <Route path="/EightC" element={<EightC />} />
          <Route path="/NineC" element={<NineC />} />
          <Route path="/TenC" element={<TenC />} />
          <Route path="/ElevenC" element={<ElevenC />} />
          <Route path="/TwelveC" element={<TwelveC />} />
          <Route path="/ThirteenC" element={<ThirteenC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
