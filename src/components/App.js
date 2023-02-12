import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signup" element={<Signup />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/quiz" element={<Quiz />} exact />
          <Route path="/result" element={<Result />} exact />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
