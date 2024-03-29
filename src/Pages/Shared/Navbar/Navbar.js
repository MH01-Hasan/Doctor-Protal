import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contex/AuthProvider";

const Navbar = () => {
  const { user, singout } = useContext(AuthContext);

  const handelsingout = () => {
    singout();
  };

  const menuitem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li> */}
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

      {user?.uid ? (
        <>
          <button onClick={handelsingout} className="btn btn-error">
            Sing Out
          </button>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuitem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctor's Portal
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuitem}</ul>
      </div>
      <label
        htmlFor="my-drawer-2"
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
      >
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
      </label>
    </div>
  );
};

export default Navbar;
