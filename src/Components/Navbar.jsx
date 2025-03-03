import React, { useContext } from "react";
import { GlobalContext } from "../App";

const Navbar = () => {
  let {data} = useContext(GlobalContext);

  
    
  return (
    <header className=" bg-green-200 py-10">
      <div className=  {` inline_container bg-orange-200   flex justify-between items-center `}>
        <span className="text-[22px] font-bold font-mono">Logo</span>
        <ul className="hidden gap-5 sm:flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li className="relative">
            <a href="">Message</a>
            <span className="absolute -top-2.5 -right-3 bg-blue-400 w-5 h-5 flex items-center justify-center rounded-full text-xs text-white">{data.length}</span>
          </li>
        </ul>
        <button className="bg-amber-100 px-2.5 py-1 rounded-lg">Login</button>
      </div>
    </header>
  );
};

export default Navbar;
