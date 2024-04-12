import React from "react";

function ApplyDoctor() {
  return (
    <div className="h-80vh">
      <div className="p-2 border border-slate-500 h-[80% ] mt-6 mr-4 rounded-lg">
        <div className="font-poppins text-xl h-full">
          <h2 className="font-bold text-2xl mb-6 text-left">
            <u>Fill the Doctor Application form</u>
          </h2>
          <h2 className="font-bold text-xl mb-5 text-slate-500 text-left">
            Personal Information
          </h2>

          <form className="flex flex-col gap-5 font-poppins">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Firstname :
              </label>
              <input
                type="text"
                className="h-10 p-2 border focus:border-[#267c7e] rounded-md focus:outline-none focus:shadow-outline shadow-sm block w-full sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lastname :
              </label>
              <input className=" h-10 p-2 border border-gray-300 focus:border-[#267c7e] rounded-md shadow-sm focus:outline-none focus:shadow-outline block w-full sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email :
              </label>
              <input className=" h-10 p-2 border border-gray-300 focus:border-[#267c7e] rounded-md shadow-sm focus:outline-none focus:shadow-outline block w-full sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number :
              </label>
              <input className=" h-10 p-2  border border-gray-300 focus:border-[#267c7e] rounded-md shadow-sm focus:outline-none focus:shadow-outline block w-full sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address :
              </label>
              <input className=" h-10 p-2 border border-gray-300 focus:border-[#267c7e] rounded-md shadow-sm focus:outline-none focus:shadow-outline block w-full sm:text-sm" />
            </div>

            <hr className="my-6" />

            <h2 className="font-bold text-xl mb-5 text-slate-500  text-left">
              Professional Information
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Specialization :
              </label>
              <input className=" h-10 p-2 border border-gray-300 focus:border-[#267c7e] rounded-md shadow-sm focus:outline-none focus:shadow-outline block w-full sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Experience :
              </label>
              <input className="  h-10 p-2 border border-gray-300 focus:border-[#267c7e] rounded-md shadow-sm focus:outline-none focus:shadow-outline block w-full sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fee per Consultation :
              </label>
              <input className="b h-10 p-2 border border-gray-300 focus:border-[#267c7e] rounded-md shadow-sm focus:outline-none focus:shadow-outline block w-full sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cal.com EventType Link :
              </label>
              <input type="url" className=" h-10 p-2 border border-gray-300 focus:border-[#267c7e] rounded-md shadow-sm focus:outline-none focus:shadow-outline block w-full sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                From time:
              </label>
              <input
                type="time"
                className=" h-10 p-2 border border-gray-300 focus:border-[#267c7e] rounded-md shadow-sm focus:outline-none focus:shadow-outline block w-full sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                To time:
              </label>
              <input
                type="time"
                className=" h-10 p-2 border border-gray-300 focus:border-[#267c7e] rounded-md shadow-sm focus:outline-none focus:shadow-outline block w-full sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="text-base bg-[#37BFC4] hover:bg-[#ff7974] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
              >
                Apply
              </button>
            </div>
          </form>

          <h2 className="font-light text-xs text-center">
            Wait for approval from &copy; Healio+ Department
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ApplyDoctor;
