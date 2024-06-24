import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [active, setActive] = useState(1);

  console.log(active)

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
      icon: <FaHome></FaHome>
    },
    {
      id:3,
      name: 'Show',
      path: '/show',
      icon: <FaHome></FaHome>
    },
  ]

  return (
    <div className="md:hidden mt-5 h-16 flex items-center justify-center w-full">
      {/* content section start */}
      <div className="bg-slate-300 px-4 h-full w-full">
        <ul className="flex justify-around items-center h-full w-full">
          {/* item */}
          {
            listItems.map((data, index) => <li key={index}
            onClick={() => setActive(data.id)}
            className={`${active ? "m-0 duration-300" : "-mt-10 duration-300"}`}
          >
            <NavLink to="/">
              <div className={`${
                  active === data.id
                    ? " bg-pink-400 text-white border-[6px] border-white duration-300 w-12 h-12 text-3xl" : "w-10 h-10 text-3xl"
                } flex justify-center items-center rounded-full p-1`}>
                {data.icon}
              </div>
              <p
                className={`${
                  active === data.id ? "visible duration-300 mt-1" : "hidden duration-300"
                } text-center font-bold text-sm text-white`}
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
