import React from "react";
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

  const [activePage, setActivePage] = useState( localStorage.getItem("activePage") || "");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(SetAuthenticated());
    }
    dispatch(ShowLoading());
    setTimeout(() => {
      // toast("View your profile");
      dispatch(HideLoading());
    }, 500);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const getData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/user-info-by-id",
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
    localStorage.setItem("activePage" , activePage);
  }, [activePage]);

  return (
    <>
      <div className="flex">
        <div>
         <Sidebar data={data} activePage={activePage} setActivePage={setActivePage} key={activePage}/>
        </div>

        <div className="w-full">
          <Header data={data} />
          {activePage === "AdminUsers" && <Adminusers data={data}/>}
          {activePage === "AdminDoctors" && <Admindoctors data={data}/>}
          {activePage === "AdminConsult" && <AdminConsult data={data}/>}
          {activePage === "ApplyDoctor" && <ApplyDoctor data={data}/>}
        </div>
      </div>
    </>
  );
}

export default Profile;
