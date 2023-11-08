import { useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    window.electronAPI.setURL((_event, url) => {
      navigate(url);
    });
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
