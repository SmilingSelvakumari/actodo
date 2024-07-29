import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/TodoContainer";

import { useLocation } from "react-router-dom"

function Landing(){
    const name= useLocation()
    return (
        <div className="bg-black p-16" >
          <div className="bg-[#EFEFEF] p-10 rounded-md">
          <Header name ={name.state.user}/>
          <div className="flex justify-between gap-7 flex-wrap my-5">
          <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Chennai"}/>
          <Card bgcolor={"#FD6663"} title={"July"} subtitle={"01:04:34"}/>
          <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}/>
          </div>
          <Todocontainer/>
          </div>
        </div>
       
        );
}
export default Landing