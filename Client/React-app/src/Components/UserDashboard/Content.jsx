import React from "react";

function Content({data}) {
  return (
    <div className="p-2 border border-slate-500 h-[80%] mt-6 mr-4 rounded-lg">
      <h1 className="font-poppins text-xl h-full">You are a {data.isdoctor? "doctor" : data.isadmin? "admin" : "user"}</h1>
    </div>
  );
}

export default Content;
