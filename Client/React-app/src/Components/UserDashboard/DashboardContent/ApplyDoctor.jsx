import React from 'react'

function ApplyDoctor() {
  return (
    <div>
      <div className="p-2 border border-slate-500 h-[80%] mt-6 mr-4 rounded-lg">
        <div className="font-poppins text-xl h-full">
            <h2 className='font-bold text-2xl mb-5 text-left'>Fill the Application form</h2>
        NAME : <br/>
        SPECIALIZATION :<br/>
        AGE :<br/>
        GENDER :<br/>
        MEDICAL LICENSE NUMBER :<br/>
        <h2 className='font-light text-xs text-center'>Wait for approval from &copy; Healio+ Department</h2>
        </div>
      </div>
    </div>
  )
}

export default ApplyDoctor
