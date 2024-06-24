import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const MobileNav = () => {

  const [active, setActive] = useState(false)

  console.log(active)

  return (
    <div className="md:hidden mt-5 h-16 flex items-center justify-center w-full">
      {/* content section start */}
      <div className="bg-slate-300 px-4 h-full w-full">
        <ul className="flex justify-around items-center h-full w-full">
            {/* item */}
              <li onClick={() => setActive(!active)} className={`${active ? 'm-0 duration-300': '-mt-10 duration-300'}`}>
              <NavLink to="/">
                <FaHome className={`${active ? 'w-10 h-10' :' bg-pink-400 text-white border-[6px] border-white duration-300 w-14 h-14 '} mx-auto  p-1 rounded-full`}></FaHome>
                <p className={`${active ? 'hidden duration-300' : 'visible duration-300 mt-1'} text-center font-bold text-sm text-white`}>Home</p>
              </NavLink>
              </li>
              {/* item */}
            {/* item */}
              <li onClick={() => setActive(!active)} className={`${active ? 'm-0 duration-300': '-mt-10 duration-300'}`}>
              <NavLink to="/">
                <FaHome className={`${active ? 'w-10 h-10' :' bg-pink-400 text-white border-[6px] border-white duration-300 w-14 h-14 '} mx-auto  p-1 rounded-full`}></FaHome>
                <p className={`${active ? 'hidden duration-300' : 'visible duration-300 mt-1'} text-center font-bold text-sm text-white`}>Home</p>
              </NavLink>
              </li>
              {/* item */}
        </ul>
      </div>
      {/* content section end */}
    </div>
  );
};

export default MobileNav;