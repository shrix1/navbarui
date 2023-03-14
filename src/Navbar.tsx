import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { IoIosClose, IoIosArrowUp } from "react-icons/io";
import Blog from "./Blog";

const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const [navClick, setNavClick] = useState<boolean>(true);
  const listParent = useRef<HTMLUListElement | any>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      !listParent.current.contains(e.target) && setNavClick(true);
    };

    window.addEventListener("mousedown", handle);
    return () => window.removeEventListener("mousedown", handle);
  }, []);

  return (
    <>
      <nav className="navbar">
        <section className="nav-container">
          {/* title and search */}
          <div className="main-container">
            <div className="text-slate-800">
              <h1 className="text-2xl font-bold">Travi</h1>
              <h5 className=" text-[13px] -mt-1 font-bold -ml-1">Associates</h5>
            </div>

            <div className="search-menu">
              <div className="search-container">
                <CiSearch className="text-2xl text-gray" />
                <input
                  type="search"
                  className="search-inp"
                  placeholder="Search"
                />
              </div>

              {/* hamburger */}
              <div className="lg:hidden">
                <button onClick={() => setClick(!click)}>
                  {click ? (
                    <IoIosClose className="text-3xl mt-2 text-black/70" />
                  ) : (
                    <RiMenu3Line className=" mt-2 text-[26px] text-black/70" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* list of nav items */}
          <div>
            <ul
              className={`nav-ullist ${
                click ? "translate-x-0" : "translate-x-full"
              } `}
            >
              <li
                className="dropdown-parent"
                onClick={() => setNavClick(!navClick)}
                ref={listParent}
              >
                <div className="flex justify-between items-center lg:justify-center lg:gap-2">
                  <span>Invest</span>
                  <span>
                    {navClick ? (
                      <IoIosArrowUp className=" rotate-180 text-gray" />
                    ) : (
                      <IoIosArrowUp />
                    )}
                  </span>
                </div>

                {/* dropdown */}
                <div>
                  <ul
                    className={`lg:absolute  ${
                      navClick ? "hidden" : ""
                    } lg:bg-[#F5F5F5] lg:px-8 lg:py-4 top-10 rounded-md lg:shadow-md flex flex-col gap-5 justify-center
                     font-normal text-[16px] lg:w-[200px] `}
                  >
                    <li className="border-b-2 border-b-gray/20 hover:text-tblue py-2">
                      <a href="/">IND stocks</a>
                    </li>

                    <li className="border-b-2 border-b-gray/20  hover:text-tblue py-2">
                      <a href="/">IND stocks</a>
                    </li>

                    <li className="border-b-2 border-b-gray/20 hover:text-tblue py-2">
                      <a href="/">IND stocks</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list">
                <a href="/"> Features</a>
              </li>

              <li className="list">
                <a href="/">Blog</a>
              </li>

              <li className="list">
                <a href="/"> Pricing</a>
              </li>

              <li className="flex space-x-5 justify-center">
                <button className="px-6 py-3 lg:bg-whitegray rounded-full font-bold bg-white w-[200px] lg:w-auto">
                  Log In
                </button>

                <button className="px-6 py-3 bg-tblue font-bold text-[#fff] rounded-xl w-[200px] lg:w-auto ">
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </section>
      </nav>

      {/* <div className={`${click && "hidden"}`}>
        <Blog />
      </div> */}
    </>
  );
};

export default Navbar;
