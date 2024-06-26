import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Banner/Banner.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              textDecoration: isActive ? "underline" : " ",
              //   viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
          <li>
            <NavLink
              to="/cart"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "green" : "black",
                  textDecoration: isActive ? "underline" : " ",
                  //   viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userReview"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "green" : "black",
                  textDecoration: isActive ? "underline" : " ",
                  //   viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Review 
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-12 h-12" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex space-x-4 px-1">{navItem}</ul>
      </div>
      {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
    </div>
  );
};

export default Navbar;
