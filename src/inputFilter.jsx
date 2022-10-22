import React from "react";

export default function inputFilter(){
    <>
      <input className='search-box' type='search' placeholder='Type champion name' onChange={(event) => {
        console.log("ok!")
      }}/>
      <h1>Hi!</h1>
    </>
}
