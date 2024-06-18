import React from 'react'

function Xbar() {
  return (
    <div>
      
      <NavLink to="/" className={({isActive}) =>`${isActive?" Active   ":"SidebarNavlink"} mt-4`}>
            <div className="ml-8"><img src="" alt="vi" /></div>
            <div className= "  ml-3 ">
              <p className="">Home</p>
            </div>
              
            </NavLink>

            <NavLink to="/Attendence-Calculator" className={({isActive}) =>`${isActive?" Active":"SidebarNavlink"}  mt-4`}>
              
              <div className="ml-8"><img src="" alt="vi" /></div>
            <div className= " ml-3 ">
              <p className="">Attendence Calculator</p>
              </div>
            </NavLink>
            <NavLink to="/Xerox" className={({isActive}) =>`${isActive?" Active":"SidebarNavlink"}  mt-4`}>
              
              <div className="ml-8"><img src="" alt="vi" /></div>
            <div className= " ml-3 ">
              <p className="">Xerox</p>
              </div>
            </NavLink>

            <NavLink to="/Notes" className={({isActive}) =>`${isActive?" Active":"SidebarNavlink"}  mt-4`}>
             
              <div className="ml-8"><img src="" alt="vi" /></div>
            <div className= " ml-3 ">
              <p className=""> Notes</p>
              </div>
            </NavLink>

            <NavLink to="/Clubs"className={({isActive}) =>`${isActive?" Active":"SidebarNavlink"}  mt-4`}>
              
              <div className="ml-8"><img src="" alt="vi" /></div>
            <div className= " ml-3 ">
              <p className=""> Clubs</p>
              </div>
            </NavLink>
            <NavLink to="/GamingStudio"className={({isActive}) =>`${isActive?" Active":"SidebarNavlink"}  mt-4`}>
              
              <div className="ml-8"><img src="" alt="vi" /></div>
            <div className= " ml-3 ">
              <p className=""> Gaming Studio</p>
              </div>
            </NavLink>

            {/*About --> This is a comment*/}

            <NavLink to="/About-KLU" className={({isActive}) =>`${isActive?" Active ":"SidebarNavlink"}  mt-4`}>
              
              <div className="ml-8 "><img src="" alt="vi" /></div>
            <div className= " ml-3">
              <p className=""> About KLU</p>
              </div>
            </NavLink>

            <NavLink to="/About-Us" className={({isActive}) =>`${isActive?" Active":"SidebarNavlink"}  mt-4`}>
              
              <div className="ml-8"><img src="" alt="vi" /></div>
            <div className= " ml-3">
              <p className=""> About Us</p>
              </div>
            </NavLink>
    </div>
  )
}

export default x
