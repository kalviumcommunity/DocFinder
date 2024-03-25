import React from "react";

function Profile() {
  return (
    <div>
      <div>
        <div className="font-poppins text-4xl text-center my-10">
          Welcome User!
        </div>
      </div>
      <div className=" mx-40 max-w-auto text-2xl font-poppins">
        <div className="flex flex-row justify-between items-center">
          <div>Appointments</div>
          <div>Apply for Doctor</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
