import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Layout() {
  let [open, change] = useState(false);
  let end = () => {
    change(false);
  };
  let toggle = () => {
    change(!open);
  };
  return (
    <div className=" vishnu w-full h-screen grid grid-cols-9 bg-white overflow-hidden cursor- ">
      <div className="bg-white h-full col-span-2 md:flex hidden ">
        <div className=" InnerSidebar ">
          <ul className="flex flex-col  justify-center overflow-hidden ">
            <div className="ProfileDiv"></div>

            {/*Home --> This is a comment*/}

            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? " Active   " : "SidebarNavlink"} mt-4`
              }
            >
              <div className="ml-8">
                <img src="" alt="vi" />
              </div>
              <div className="  ml-3 ">
                <p className="">Home</p>
              </div>
            </NavLink>

            <NavLink
              to="/Attendence-Calculator"
              className={({ isActive }) =>
                `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
              }
            >
              <div className="ml-8">
                <img src="" alt="vi" />
              </div>
              <div className=" ml-3 ">
                <p className="">Attendence Calculator</p>
              </div>
            </NavLink>
            <NavLink
              to="/Xerox"
              className={({ isActive }) =>
                `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
              }
            >
              <div className="ml-8">
                <img src="" alt="vi" />
              </div>
              <div className=" ml-3 ">
                <p className="">Xerox</p>
              </div>
            </NavLink>

            <NavLink
              to="/Notes"
              className={({ isActive }) =>
                `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
              }
            >
              <div className="ml-8">
                <img src="" alt="vi" />
              </div>
              <div className=" ml-3 ">
                <p className=""> Notes</p>
              </div>
            </NavLink>

            <NavLink
              to="/Clubs"
              className={({ isActive }) =>
                `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
              }
            >
              <div className="ml-8">
                <img src="" alt="vi" />
              </div>
              <div className=" ml-3 ">
                <p className=""> Clubs</p>
              </div>
            </NavLink>
            <NavLink
              to="/GamingStudio"
              className={({ isActive }) =>
                `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
              }
            >
              <div className="ml-8">
                <img src="" alt="vi" />
              </div>
              <div className=" ml-3 ">
                <p className=""> Gaming Studio</p>
              </div>
            </NavLink>

            {/*About --> This is a comment*/}

            <NavLink
              to="/About-KLU"
              className={({ isActive }) =>
                `${isActive ? " Active " : "SidebarNavlink"}  mt-4`
              }
            >
              <div className="ml-8 ">
                <img src="" alt="vi" />
              </div>
              <div className=" ml-3">
                <p className=""> About KLU</p>
              </div>
            </NavLink>

            <NavLink
              to="/About-Us"
              className={({ isActive }) =>
                `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
              }
            >
              <div className="ml-8">
                <img src="" alt="vi" />
              </div>
              <div className=" ml-3">
                <p className=""> About Us</p>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="bg-white-400 h-full col-span-9 overflow-hidden md:col-span-7">
        <div className="nav w-full bg-white max-h-20  md:h-20 flex  justify-between   items-center">
          <p className="ml-5 md:text-4xl text-[6vw]  font-bold">
            University Studio
          </p>
          <button className="mr-8 p-3 md:flex hidden px-8 rounded-3xl bg-slate-700 text-white font-bold">
            Login/SignUp
          </button>

          <button onClick={toggle} className="md:hidden flex  px-3 py-6">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className=" fixed w-full h-screen bg-black md:hidden flex-col  text-2xl">
            <ul className="">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? " Active   " : "SidebarNavlink"} mt-14`
                }
                onClick={end}
              >
                <div className="ml-8">
                  <img src="" alt="vi" />
                </div>
                <div className="  ml-3 ">
                  <p className="">Home</p>
                </div>
              </NavLink>

              <NavLink
                to="/Attendence-Calculator"
                className={({ isActive }) =>
                  `${isActive ? " Active" : "SidebarNavlink "}  mt-4`
                }
                onClick={end}
              >
                <div className="ml-8">
                  <img src="" alt="vi" />
                </div>
                <div className=" ml-3 ">
                  <p className="">Attendence Calculator</p>
                </div>
              </NavLink>
              <NavLink
                to="/Xerox"
                className={({ isActive }) =>
                  `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
                }
                onClick={end}
              >
                <div className="ml-8">
                  <img src="" alt="vi" />
                </div>
                <div className=" ml-3 ">
                  <p className="">Xerox</p>
                </div>
              </NavLink>

              <NavLink
                to="/Notes"
                className={({ isActive }) =>
                  `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
                }
                onClick={end}
              >
                <div className="ml-8">
                  <img src="" alt="vi" />
                </div>
                <div className=" ml-3 ">
                  <p className=""> Notes</p>
                </div>
              </NavLink>

              <NavLink
                to="/Clubs"
                className={({ isActive }) =>
                  `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
                }
                onClick={end}
              >
                <div className="ml-8">
                  <img src="" alt="vi" />
                </div>
                <div className=" ml-3 ">
                  <p className=""> Clubs</p>
                </div>
              </NavLink>
              <NavLink
                to="/GamingStudio"
                className={({ isActive }) =>
                  `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
                }
                onClick={end}
              >
                <div className="ml-8">
                  <img src="" alt="vi" />
                </div>
                <div className=" ml-3 ">
                  <p className=""> Gaming Studio</p>
                </div>
              </NavLink>

              {/*About --> This is a comment*/}

              <NavLink
                to="/About-KLU"
                className={({ isActive }) =>
                  `${isActive ? " Active " : "SidebarNavlink"}  mt-4`
                }
                onClick={end}
              >
                <div className="ml-8 ">
                  <img src="" alt="vi" />
                </div>
                <div className=" ml-3">
                  <p className=""> About KLU</p>
                </div>
              </NavLink>

              <NavLink
                to="/About-Us"
                className={({ isActive }) =>
                  `${isActive ? " Active" : "SidebarNavlink"}  mt-4`
                }
                onClick={end}
              >
                
                  <div className="ml-8">
                    <img src="" alt="vi" />
                  </div>
                  <div className=" ml-3">
                    <p className="">About Us</p>
                  </div>
                
              </NavLink>
            </ul>
          </div>
        )}
        <div className="outlet "></div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
