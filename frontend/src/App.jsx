import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Login from "./components/LogIn/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./actions/user";
import { useEffect } from "react";
import Admin from "./components/AdminPanel/Admin";
import Project from "./components/AdminPanel/Project";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home skills={user ? user.skills : []} />}
            />
            <Route
              path="/about"
              element={<About about={user ? user.about : ""} />}
            />
            <Route
              path="/projects"
              element={<Projects projects={user ? user.projects : ""} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/account"
              element={isAuthenticated ? <Admin /> : <Login />}
            />
            <Route
              path="/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
