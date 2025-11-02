// src/App.jsx
import About from "@/component/layout/About";
import MainLayout from "@/component/layout/MainLayout";
import ContactPage from "@/page/ContactPage";
import HomePage from "@/page/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
