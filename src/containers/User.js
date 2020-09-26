import React from "react";
import Cards from "../components/Cards";
import PrivateRouter from "./PrivateRout"

const User = ()=>{
  return(
    <div>
    <PrivateRouter path="/user/:userID" component={Cards} />
    </div>
  )
}
export default User