import "./App.css";
import Login from "./Components/Account/Login";
import SignUp from "./Components/Account/SignUp";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import Profile from "./Components/UserDashboard/Profile";
import Layout from "./Components/UserDashboard/Layout";

function App() {
  const { loading } = useSelector((state) => state.loader);

  return (
    <>
      {/* {loading && (
        <div className="spinner flex justify-center items-center h-screen">
          <HashLoader color="#36d7b7" className="h-16" />
        </div>
      )}

      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes> */}
      <Profile/>
      {/* <Layout /> */}
    </>
  );
}

export default App;
