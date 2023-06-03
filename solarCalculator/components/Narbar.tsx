import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Menu from "./menu";

import Calculator from "../src/calculator";
import Dashboard from "../src/dashboard";
import Shop from "../src/shop";
import Blogs from "../src/blogs";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isCloseButtonVisible, setCloseButtonVisible] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
    setCloseButtonVisible(!isMenuOpen);
  }

  const links = ["Dashboard", "Shop", "Calculator", "Blogs"];
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
    // You can perform any additional actions based on the clicked link here
  };

  return (
    <>
      
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/*<!-- mobile menu -->*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      className={`${
                        isCloseButtonVisible ? "hidden" : ""
                      } h-6 w-6`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      onClick={() => {
                        setMenuOpen(true);
                        setCloseButtonVisible(false);
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
                <div
                  className={`${
                    isMenuOpen ? "hidden" : "flex"
                  } flex-col  absolute bottom-0 left-0 top-11`}
                >
                  <div className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {/*<Menu links={links}  menuItems={links} handleLinkClick={handleLinkClick} classNames="block px-4 py-2 text-gray-700 focus:border-green-400 hover:border-red-700 hover:border-solid hover:border-b-2  text-sm font-medium" />*/}
                  <div className="flex flex-col flex-wrap">
                    {links.map((link) => (

                      <Link
                        key={link}
                        to={`/${link.toLowerCase().replace(" ", "-")}`}
                        className={`${
                          link === selectedLink
                            ? "border-b-2 border-green-400"
                            : "border-b-0"
                        } text-gray-900 px-3 py-2 text-sm font-medium`}
                      >
                        {link}
                      </Link>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="./mark.svg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="./mark.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {links.map((link) => (
                      <Link
                        key={link}
                        to={`/${link.toLowerCase().replace(" ", "-")}`}
                        className={`${
                          link === selectedLink
                            ? "border-b-2 border-green-400"
                            : "border-b-0"
                        } text-gray-300 px-3 py-2 text-sm font-medium`}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

       

        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}>

          </Route>
          <Route path="/calculator" element={<Calculator/>}>

          </Route>
          <Route path="/shop" element={<Shop/>}>

          </Route>
          <Route path="/blogs" element={<Blogs/>}>

          </Route>
        </Routes>
      
    </>
  );
};

export default Navbar;
