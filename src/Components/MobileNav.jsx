import { useState } from "react";
import { FaHome, FaPhone, FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [active, setActive] = useState(1);

  const listItems = [
    {
      id:1,
      name: 'Home',
      path: '/',
      icon: <FaHome></FaHome>
    },
    {
      id:2,
      name: 'Contact',
      path: '/contact',
      icon: <FaPhone></FaPhone>
    },
    {
      id:3,
      name: 'Show',
      path: '/show',
      icon: <FaEye></FaEye>
    },
  ]

  return (
    <div className="fixed bottom-0 z-20 md:hidden h-16 flex items-center justify-center w-full">
      {/* content section start */}
      <div className="bg-slate-200  px-4 h-full w-full">
        <ul className="flex justify-around items-center h-full w-full">
          {/* item */}
          {
            listItems.map((data, index) => <li key={index}
            onClick={() => setActive(data.id)}
            className={`${active === data.id ? "-mt-8 duration-300" : "m-0 duration-300" }`}
          >
            <NavLink to={data.path}>
              <div className={`${
                  active === data.id
                    ? " bg-[#37FF8B] text-black border-[6px] border-white duration-300 w-12 h-12 text-4xl" : "w-12 h-12 text-3xl text-gray-500"
                } flex justify-center items-center rounded-full p-1 mx-auto`}>
                {data.icon}
              </div>
              <p
                className={`${
                  active === data.id ? "visible duration-300 mt-1" : "hidden duration-300"
                } text-center font-bold text-sm text-black`}
              >
                {data.name}
              </p>
            </NavLink>
          </li>)
          }
          
          {/* item */}
        </ul>
      </div>
      {/* content section end */}
    </div>
  );
};

export default MobileNav;
