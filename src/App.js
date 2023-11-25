import Landingpage from "./pages/Landingpage";
import Signin from "./pages/Signin";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./config/AuthContex";
import Signup from "./pages/Signup";
import Principalpage from "./pages/Principalpage";
import RecoverPass from "./pages/RecoverPass";
import Create from "./pages/Create";
import { TareaProv } from "./util/tareasContext";

function App() {
  return (
    <TareaProv>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Landingpage />} />
            <Route
              exact
              path="/inicio"
              element={
                <ProtectedRoute>
                  <Principalpage />
                </ProtectedRoute>
              }
            />
            <Route exact path="/signIn" element={<Signin />} />
            <Route exact path="/signUp" element={<Signup />} />
            <Route exact path="/recover" element={<RecoverPass />} />
            <Route exact path="/create" element={<Create />} />
          </Routes>
        </AuthProvider>
      </Router>
    </TareaProv>
  );
}

export default App;
