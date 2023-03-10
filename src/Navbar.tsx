import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { IoIosClose, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
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
      <nav className="border-b border-b-[#b1a6a69a] p-5 flex justify-around items-center">
        <section className="flex lg:justify-around items-center lg:w-[70vw] w-[100vw] justify-center">
          <div className="flex lg:gap-6 gap-[170px] justify-around">
            <div className="text-slate-800">
              <h1 className="text-2xl font-bold">Travi</h1>
              <h5 className="text-[13px] -mt-1 font-bold -ml-1">Associates</h5>
            </div>

            <div className="flex lg:block lg:gap-6 items-center justify-center gap-4">
              <div className="p-3 border-gray lg:border bg-whitegray tracking-wide rounded-full flex font-[500]     ">
                <CiSearch className="text-2xl text-gray " />
                <input
                  type="search"
                  className="outline-none placeholder:text-[13px] placeholder:text-gray bg-whitegray pl-2 pt-[2px]
                  hidden lg:block"
                  placeholder="Search"
                />
              </div>

              <div className="lg:hidden">
                <button onClick={() => setClick(!click)}>
                  {click ? (
                    <IoIosClose className="text-4xl mt-2 text-black/70" />
                  ) : (
                    <RiMenu3Line className=" mt-2 text-[26px] text-black/70" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className={` ${click ? "" : "hidden"}  lg:block lg:static `}>
            <ul
              className="flex justify-center lg:items-center lg:flex-row lg:gap-8 font-medium text-black tracking-wide
             absolute left-0 flex-col top-[90px] p-4 w-full lg:static lg:border-0 lg:p-0 gap-4
             bg-[#e7e4e4] lg:bg-transparent"
            >
              <li
                className="lg:relative px-6 bg-white py-6 rounded-lg lg:p-0 lg:rounded-none 
                text-[18px] font-bold text-slate-700 lg:text-[17px] lg:font-normal cursor-pointer"
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

                <div>
                  <ul
                    className={`lg:absolute { ${
                      navClick ? "hidden" : ""
                    } lg:bg-[#F5F5F5] lg:px-8 lg:py-4 top-10 rounded-md lg:shadow-md flex flex-col gap-5 justify-center
                     font-normal text-[16px] lg:w-[200px]`}
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

              <li
                className=" hover:text-tblue px-6 bg-white py-6 rounded-lg lg:p-0 lg:rounded-none 
                text-[18px] font-bold text-slate-700 lg:text-[17px] lg:font-normal"
              >
                <a href="/"> Features</a>
              </li>

              <li
                className="hover:text-tblue px-6 bg-white py-6 rounded-lg lg:p-0 lg:rounded-none 
                text-[18px] font-bold text-slate-700 lg:text-[17px] lg:font-normal"
              >
                <a href="/">Blog</a>
              </li>

              <li
                className=" hover:text-tblue px-6 bg-white py-6 rounded-lg lg:p-0 lg:rounded-none 
                text-[18px] font-bold text-slate-700 lg:text-[17px] lg:font-normal"
              >
                <a href="/"> Pricing</a>
              </li>

              <li className="flex gap-5 justify-center">
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
    </>
  );
};

export default Navbar;
