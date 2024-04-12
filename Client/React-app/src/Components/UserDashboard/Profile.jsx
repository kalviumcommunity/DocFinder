import React from "react";
import schedule from "../../Assets/schedule.png";
import doctor from "../../Assets/doctor.png";
import logout from "../../Assets/logout.png";
import notify from "../../Assets/bell.png";
import home from "../../Assets/home.png";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SetAuthenticated } from "../../Redux/AuthenticateReducer";
import Admindoctors from "./DashboardContent/AdminDoctors";
import { HideLoading, ShowLoading } from "../../Redux/LoaderReducer";
import toast from "react-hot-toast";
import Adminusers from "./DashboardContent/AdminUsers";
import AdminConsult from "./DashboardContent/AdminConsult";
import ApplyDoctor from "./DashboardContent/ApplyDoctor";

function Profile() {
  const [data, setdata] = useState({});
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.isAuthenticated);

  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(SetAuthenticated());
    }
    dispatch(ShowLoading());
    setTimeout(() => {
      toast("View your profile");
      dispatch(HideLoading());
    }, 500);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const getData = async () => {
        try {
          const response = await axios.post(
            "http://localhost:4000/get-user-info-by-id",
            {},
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          setdata(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="flex">
        <div>
         <Sidebar data={data} activePage={activePage} setActivePage={setActivePage} className="sticky"/>
        </div>

        <div className="w-full">
          <Header data={data} />
          {activePage === "AdminUsers" && <Adminusers/>}
          {activePage === "AdminDoctors" && <Admindoctors/>}
          {activePage === "AdminConsult" && <AdminConsult/>}
          {activePage === "ApplyDoctor" && <ApplyDoctor/>}
        </div>
      </div>
    </>
  );
}

export default Profile;
