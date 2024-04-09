import "./App.css";
import Login from "./Components/Account/Login";
import SignUp from "./Components/Account/SignUp";
import Footer from "./Components/Footer";
import Header from "./Components/UserDashboard/Header";
import Head from "./Components/Header";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import Profile from "./Components/UserDashboard/Profile";
import Services from "./Components/Services/Services";
import Adminusers from "./Components/UserDashboard/DashboardContent/AdminUsers";
import Admindoctors from "./Components/UserDashboard/DashboardContent/AdminDoctors";
import AdminConsult from "./Components/UserDashboard/DashboardContent/AdminConsult";
import ApplyDoctor from "./Components/UserDashboard/DashboardContent/ApplyDoctor";

function App() {
  const { loading } = useSelector((state) => state.loader);

  return (
    <>
      {loading && (
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
        <Route path="/Services" element={<Services />} />
        <Route
          path="/Allusers"
          element={
            <Profile>
              <Adminusers />
            </Profile>
          }
        />
        <Route
          path="/Alldoctors"
          element={
            <Profile>
              <Admindoctors />
            </Profile>
          }
        />
        <Route
          path="/Allconsult"
          element={
            <Profile>
              <AdminConsult />
            </Profile>
          }
        />

        <Route
          path="/ApplyDoc"
          element={
            <Profile>
              <ApplyDoctor />
            </Profile>
          }
        />
      </Routes>
    </>
  );
}

export default App;
