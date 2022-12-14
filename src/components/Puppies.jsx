import React, { useEffect, useState } from "react";
import SinglePuppy from './SinglePuppy';



const Puppies = (props) => {
    const myPuppies = props.allPuppies
    console.log(props)

    return (
    <div className="allPups">{myPuppies.map((puppy)=>{
      return <SinglePuppy key={puppy.id} puppy={puppy}/>
    })}
    </div>)
};

export default Puppies;
