import React from "react";
import milshakes from "../assets/milshakes.json";
import { MilshakeCard } from "./MilshakeCard";

export const MilshakeContainer = () => {
  return (
    <div className="milshake-container">
      <div className="milshake-container-cards">
        {
            milshakes.map((milshake)=>{
                return <MilshakeCard milshake={milshake} key={milshake.id}/>
            })
        }
      </div>
    </div>
  );
};
