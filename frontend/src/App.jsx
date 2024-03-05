import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./actions/user";
import { useEffect, Suspense, lazy } from "react";
import Admin from "./components/AdminPanel/Admin";
import { DNA } from "react-loader-spinner";

const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Project"));
const Project = lazy(() => import("./components/AdminPanel/Project"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Login = lazy(() => import("./components/LogIn/Login"));

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          wrapperClass="dna-wrapper"
        />
      }
    >
      <Router>
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
      </Router>
    </Suspense>
  );
}

export default App;
