import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* <Route path="/" element={<TimeOut />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
