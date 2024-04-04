import React from "react";
import schedule from "../../Assets/schedule.png";
import doctor from "../../Assets/doctor.png";
import logout from "../../Assets/logout.png";
import search from "../../Assets/search.png";

function Sidebar() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen w-72">
        <div className=" flex flex-col rounded-2xl bg-[#37BFC4] h-[96%] w-64 font-poppins">
          <div className="text-4xl text-left font-bold text-white p-4">
            Healio+
          </div>

          <div className="ml-2 mt-10 mr-2">
            <div className="mt-2 flex p-2 hover:border hover:border-b-2 rounded-lg hover:border-white">
              <div className="flex flex-row items-center cursor-pointer">
                <img src={search} alt="Doctor" className="h-8 mr-2" />
                <p className="text-white ml-2">Find your Doctor</p>
              </div>
            </div>

            <div className=" mt-2 flex p-2 hover:border hover:border-b-2 rounded-lg hover:border-white">
              <div className="flex flex-row items-center justify-center cursor-pointer">
                <img src={schedule} alt="Schedule" className="h-8 mr-2" />
                <p className="text-white ml-2">Appointments</p>
              </div>
            </div>

            <div className="mt-2 flex p-2 hover:border hover:border-b-2 rounded-lg hover:border-white">
              <div className="flex flex-row items-center cursor-pointer">
                <img src={doctor} alt="Doctor" className="h-8 mr-2" />
                <p className="text-white ml-2">Apply as a Doctor</p>
              </div>
            </div>

            {/* <div className="mt-2 flex p-2 hover:border hover:border-b-2 rounded-lg hover:border-white">
              <div className="flex flex-row items-center cursor-pointer">
                <img src={doctor} alt="Doctor" className="h-8 mr-2" />
                <p className="text-white ml-2">Profiles</p>
              </div>
            </div> */}
          </div>

          <div className="ml-6 mt-80 ">
            <div className="hover:border-b-2 hover:border-white w-max pb-2">
              <div className="flex flex-row items-center cursor-pointer">
                <img src={logout} alt="logout" className="h-8 mr-2" />
                <p className="text-white">Log Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
