import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StartupLoader from "./components/StartupLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {loading ? (
        <StartupLoader />
      ) : ( */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* )} */}
    </>
  );
}

export default App;
