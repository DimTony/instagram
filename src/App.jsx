import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-otp-kit/dist/index.css";
import Landing from "./pages/Landing";

function App() {
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
