import React from "react";
import notify from "../../Assets/bell.png";
import home from "../../Assets/home.png";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div className="flex w-full">
      <div className="flex flex-row justify-between items-center w-full border border-slate-500 rounded-lg p-4 mt-4 mr-4">
        <div className="font-poppins text-3xl">
          {" "}
          Welcome <span>{data.name}</span>
        </div>
        <div className="flex flex-grow justify-end">
          <div>
            <img src={notify} className="h-8" />
          </div>
          <Link to="/">
            <div className="flex">
              <img src={home} className="h-8 ml-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
