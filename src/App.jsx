import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import TeamPage from "./components/TeamPage/TeamPage";
import DocumentationPage from "./components/DocumentationPage/DocumentationPage";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
