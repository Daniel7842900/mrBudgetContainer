import React from "react";
import { NavLink } from "react-router-dom";

class AppHeader extends React.Component {
  render() {
    return (
      <nav className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-white-700">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="mx-auto h-16 w-auto bg-white"
                    src="../images/pepe.png"
                    alt="Mr.pepe"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/* Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" */}
                    <a
                      href="/dashboard"
                      className="text-green-500 transform hover:scale-110 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </a>

                    <a
                      href="/budget"
                      className="text-green-500 transform hover:scale-110 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Budget
                    </a>

                    <a
                      href="/expense"
                      className="text-green-500 transform hover:scale-110 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Expense
                    </a>

                    <a
                      href="/report"
                      className="text-green-500 transform hover:scale-110 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Reports
                    </a>

                    <a
                      href="#"
                      className="text-green-500 transform hover:scale-110 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium pointer-events-none"
                    >
                      Settings
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/** Profile dropdown */}
                  <div className="ml-3 relative">
                    <div>
                      <button
                        type="button"
                        className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="../images/otter.jpg"
                          alt=""
                        />
                      </button>
                    </div>

                    {/**   Dropdown menu, show/hide based on menu state.
                    Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95" */}
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
                      id="user-menu"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      {/** Active: "bg-gray-100", Not Active: "" */}
                      <a
                        href=""
                        className="block px-4 py-2 text-sm text-green-500 pointer-events-none"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </a>

                      <a
                        href=""
                        className="block px-4 py-2 text-sm text-green-500 pointer-events-none"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>

                      <a
                        href="/logout"
                        className="block px-4 py-2 text-sm text-green-500"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/** Mobile menu button  */}
                <button
                  type="button"
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md text-green-600 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                  id="mobile-menu-btn"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/**
             *  Heroicon name: outline/menu

                Menu open: "hidden", Menu closed: "block"
             */}
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/**
             *  Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden" */}
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/** Mobile menu, show/hide based on menu state. */}
        <div
          className="relative min-h-screen hidden md:hidden z-50"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/** Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" */}
            <a
              href="/dashboard"
              className="text-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </a>

            <a
              href="/budget"
              className="text-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
            >
              Budget
            </a>

            <a
              href="/expense"
              className="text-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
            >
              Expense
            </a>

            <a
              href="/report"
              className="text-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
            >
              Reports
            </a>

            <a
              href=""
              className="text-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium pointer-events-none"
            >
              Settings
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-green-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-green-500">
                  user firstName and user lastName here
                </div>
                <div className="text-sm font-medium text-green-500">
                  user email here
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-green-500 hover:bg-green-500 hover:bg-opacity-75 hover:text-white pointer-events-none"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-green-500 hover:bg-green-500 hover:bg-opacity-75 hover:text-white pointer-events-none"
              >
                Settings
              </a>
              <a
                href="/logout"
                className="block px-3 py-2 rounded-md text-base font-medium text-green-500 hover:bg-green-500 hover:bg-opacity-75 hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppHeader;
