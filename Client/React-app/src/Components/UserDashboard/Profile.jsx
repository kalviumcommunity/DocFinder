import React from "react";
import schedule from "../../Assets/schedule.png";
import doctor from "../../Assets/doctor.png";
import logout from "../../Assets/logout.png";
import notify from "../../Assets/bell.png";
import home from "../../Assets/home.png";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

function Profile() {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="w-full">
          <Header />
          <Content />
        </div>
      </div>
    </>
  );
}

export default Profile;
