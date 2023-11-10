import Landingpage from "./pages/Landingpage";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landingpage />}/>
        <Route exact path="/signIn" element={<Signin />}/>
      </Routes>
    </Router>
  );
}

export default App;
