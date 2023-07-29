import React from "react";
import Feature_box from "./feature_box";
import "./features.css"
import "./scrollbar.css"
import feature from "./Features.json"

function Features() {
  return (
    <div className="features" id="features">
      {feature.map((ele)=>{
          return <Feature_box title={ele.name} properties={ele.description}/>
        })}
    </div>
  );
}

export default Features;
