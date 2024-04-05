import React from "react";
import schedule from "../../Assets/schedule.png";
import doctor from "../../Assets/doctor.png";
import logout from "../../Assets/logout.png";
import search from "../../Assets/search.png";
import logo from "../../Assets/logo-white.png";
import { useNavigate } from "react-router-dom";

function Sidebar({ data }) {
  const navigateto = useNavigate();

  const loggingOut = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.clear();
      navigateto("/");
      window.location.reload(); 
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen w-72">
        <div className=" flex flex-col rounded-2xl bg-[#37BFC4] h-[96%] w-64 font-poppins">
          <div className="flex flex-col items-center">
            <div>
              <img src={logo} className="h-16 w-16 mt-10" />
            </div>
            <div className="text-4xl text-left font-bold text-white p-4">
              Healio
            </div>
            {/* <hr className="border-t-2 border-gray-300" /> */}
            <div className="text-lg text-white font-bold p-2">
              {data.isdoctor ? "Doctor" : data.isadmin ? "Admin" : "User"}
            </div>
          </div>

          {data.isadmin ? (
            <div className="ml-2 mt-10 mr-2">
              <div className="mt-2 flex p-2 hover:border rounded-lg hover:border-white">
                <div className="flex flex-row items-center cursor-pointer">
                  <img src={search} alt="Doctor" className="h-8 mr-2" />
                  <p className="text-white ml-2">Manage Doctors</p>
                </div>
              </div>

              <div className=" mt-2 flex p-2 hover:border rounded-lg hover:border-white">
                <div className="flex flex-row items-center justify-center cursor-pointer">
                  <img src={schedule} alt="Schedule" className="h-8 mr-2" />
                  <p className="text-white ml-2">Manage Users</p>
                </div>
              </div>

              <div className="mt-2 flex p-2 hover:border rounded-lg hover:border-white">
                <div className="flex flex-row items-center cursor-pointer">
                  <img src={doctor} alt="Doctor" className="h-8 mr-2" />
                  <p className="text-white ml-2">Manage Consultations</p>
                </div>
              </div>
            </div>
          ) : data.isdoctor ? (
            <div className="ml-2 mt-10 mr-2">
              <div className="mt-2 flex p-2 hover:border rounded-lg hover:border-white">
                <div className="flex flex-row items-center cursor-pointer">
                  <img src={search} alt="Doctor" className="h-8 mr-2" />
                  <p className="text-white ml-2">My Consultations</p>
                </div>
              </div>

              <div className=" mt-2 flex p-2 hover:border  rounded-lg hover:border-white">
                <div className="flex flex-row items-center justify-center cursor-pointer">
                  <img src={schedule} alt="Schedule" className="h-8 mr-2" />
                  <p className="text-white ml-2">My Patients</p>
                </div>
              </div>

              <div className="mt-2 flex p-2 hover:border  rounded-lg hover:border-white">
                <div className="flex flex-row items-center cursor-pointer">
                  <img src={doctor} alt="Doctor" className="h-8 mr-2" />
                  <p className="text-white ml-2">My Profile</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="ml-2 mt-10 mr-2">
              <div className="mt-2 flex p-2 hover:border rounded-lg hover:border-white">
                <div className="flex flex-row items-center cursor-pointer">
                  <img src={search} alt="Doctor" className="h-8 mr-2" />
                  <p className="text-white ml-2">Book Appointment</p>
                </div>
              </div>

              <div className=" mt-2 flex p-2 hover:border rounded-lg hover:border-white">
                <div className="flex flex-row items-center justify-center cursor-pointer">
                  <img src={schedule} alt="Schedule" className="h-8 mr-2" />
                  <p className="text-white ml-2">My Appointments</p>
                </div>
              </div>

              <div className="mt-2 flex p-2 hover:border  rounded-lg hover:border-white">
                <div className="flex flex-row items-center cursor-pointer">
                  <img src={doctor} alt="Doctor" className="h-8 mr-2" />
                  <p className="text-white ml-2">Apply as a doctor</p>
                </div>
              </div>

              <div className="mt-2 flex p-2 hover:border  rounded-lg hover:border-white">
                <div className="flex flex-row items-center cursor-pointer">
                  <img src={doctor} alt="Doctor" className="h-8 mr-2" />
                  <p className="text-white ml-2">Personal Profile</p>
                </div>
              </div>
            </div>
          )}

          <div className="absolute bottom-0 left-16 right-16 p-4">
            <div className=" w-max pb-2">
              <div className="flex flex-row items-center justify-center cursor-pointer">
                <div className="flex my-4">
                  <button onClick={loggingOut} className="flex">
                    <img src={logout} alt="logout" className="h-6 mr-2" />
                    <p className="text-white">Log Out</p>
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Sidebar;
