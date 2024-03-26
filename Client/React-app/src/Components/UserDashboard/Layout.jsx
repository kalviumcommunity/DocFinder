import React from "react";
import schedule from "../../Assets/schedule.png";
import doctor from "../../Assets/doctor.png";
import logout from "../../Assets/logout.png";

function Layout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className=" absolute top-4 left-4 rounded-2xl bg-[#37BFC4] h-screen w-1/6 font-poppins">
        <div className="text-4xl text-left font-bold text-white p-4">
          Healio+
        </div>

        <div className="ml-2 mt-10">
          <div className="p-2">
            <div className="flex flex-row items-center cursor-pointer">
              <img src={schedule} alt="Schedule" className="h-8 mr-2" />
              <p className="text-white ">Appointments</p>
            </div>
          </div>

          <div className="p-2 mt-2">
            <div className="flex flex-row items-center cursor-pointer">
              <img src={doctor} alt="Doctor" className="h-8 mr-2" />
              <p className="text-white">Apply as a Doctor</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 ml-4">
          <div>
            <div className="flex flex-row items-center cursor-pointer">
              <img src={logout} alt="logout" className="h-8 mr-2" />
              <p className="text-white">Log Out</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Layout;
