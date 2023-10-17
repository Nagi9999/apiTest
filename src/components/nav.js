"use client";
import Link from "next/link";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from 'next/navigation'


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(""); 
  const pathname = usePathname();
  useEffect(() => {
    setSelectedLink(pathname);
  }, [pathname]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };

  const menuItems = [
    { title: "about us", path: "/aboutus" },
    { title: "Inventory", path: "/inventory" },
    { title: "Special Offers", path: "/specialOffers" },
    { title: "contact us", path: "/contactus" },
  ];

  return (
    <nav className="2xl:container  mx-auto relative sm:px-20 px-8">
      <div className="flex flex-row justify-between  sm:my-12 my-6 text-blue-500   items-center  ">
        <div className="  font-extrabold	sm:text-xl text-sm  ">
          <div className="">
            <a href="/" className=" ">
              <span className="text-blue-500">Auto</span>
              <span className="text-orange-500">Vista</span>
            </a>
          </div>
        
          <div className={`sm:hidden custom-background1 ${menuOpen ? "absolute-overlay" : ""} absolute right-0 left-0 sm:my-24 my-12   border-b-cyan-500 border-b-[1px]`}>

            <ul
              className={`sm:flex sm:flex-row flex-col font-semibold  sm:text-lg text-2xl  my-4   items-center     ${
                menuOpen ? "flex" : "hidden"
              }  sm:space-y-0 space-y-16 mt-3`}
            >
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}
                  className={`nav-link `}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sm:hidden items-center  ml-[20%] mr-5 mt-1   ">
          <button
            onClick={toggleMenu}
            className="text-white w-[36px] h-[29px]    rounded-[4px] "
          >
            <svg
              className="h-6 w-6 fill-current custom-green0 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={"hidden sm:flex items-center  "}>
          <ul className=" flex   justify-between  text-lg  sm:space-x-[52px] sm:pr-16 font-semibold   ">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
