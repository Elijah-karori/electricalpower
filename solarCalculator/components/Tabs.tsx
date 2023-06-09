import React, { useState } from 'react';

interface MenuItem {
  label: string;
  link: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  function showCustomPower(){console.log('custom power')}
  function showInverter(){console.log('custom inverter')}
  function showSolarPanels(){console.log('custom solar panels')}
  function showSolarControllers(){console.log('custom solar controller')}
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuItems: MenuItem[] = [
    { label: 'Solar Calculator', link: '#' },
    { label: 'Shop', link: '#' },
    { label: 'Blogs', link: '#' },
    { label: 'Projects', link: '#' },
  ];

  return (
    <>
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
               
                aria-expanded={isMenuOpen ? 'true' : 'false'}
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                ) : (
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
              <div
                className={`${
                  isMenuOpen ? 'flex' : 'hidden'
                } flex-col invisible absolute bottom-0 left-0 top-11`}
              >
                <div
                  className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block px-4 py-2 text-gray-700 focus:border-green-400 hover:border-red-700 hover:border-solid hover:border-b-2  text-sm font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
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
                  <a
                    href="#"
                    className="focus:border-green-400 hover:border-red-700 hover:border-solid hover:border-b-2 text-gray-300 px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 focus:border-green-400 hover:border-red-700 hover:border-solid hover:border-b-2 px-3 py-2 text-sm font-medium"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 focus:border-green-400 hover:border-red-700 hover:border-solid hover:border-b-2 px-3 py-2 text-sm font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 focus:border-green-400 hover:border-red-700 hover:border-solid hover:border-b-2 px-3 py-2 text-sm font-medium"
                  >
                    Calendar
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  id="dropdown-menu"
                  className="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  
                >
                  <a href="#" className="block px-4 py-2">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </nav>
      </header>
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 justify-between flex flex-row flex-wrap align-middle pt-4 items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          <div className="flex flex-row px-4 mx-2 align-middle pt-4 items-center">
            <a href="#customPower" id="customPowerbtn" onClick={showCustomPower}>
              Custom Power
            </a>
            <a href="#" id="inverterBtn" onClick={showInverter}>
              Inverter
            </a>
            <a href="#" id="solarPanelBtn" onClick={showSolarPanels}>
              Solar Panels
            </a>
            <a href="#" id="solarControllerBtn" onClick={showSolarControllers}>
              Solar Controllers
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
