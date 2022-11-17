import React from "react";
import SkillCard from "../../SkillCard";

export default function Skills(){
  

  return(<React.Fragment>
     <div className="p-4 rounded-lg drop-shadow-lg bg-gradient-to-r from-tertiary to-tertiary max-w-screen-lg mx-auto w-full h-auto">
          <div className="pb-8">
            <p className="sm:text-5xl font-semibold text-2xl capitalize  border-b-2 border-white inline">skills</p>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row">
            <SkillCard/>
          </div>
        </div>      
  </React.Fragment>)
}