import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <div>
        <Link to="/signup">sign up</Link>
        <Link to="/login">login</Link>
      </div> */}
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
