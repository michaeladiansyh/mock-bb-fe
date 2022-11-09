import React, { useState } from 'react';
import fbIcon from '../assets/img/fb-icon.svg';
import profilePhoto from '../assets/img/profile-photo.svg';
import { BsDot } from 'react-icons/bs';

const Navbar = () => {
  const [onClickUser, setonClickUser] = useState(false);
  const [onClickMenu, setOnClickMenu] = useState(false);

  return (
    <nav className="bg-white border-gray-200 px-4 md:px-14">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img src={fbIcon} className="mr-3 h-6 sm:h-9" alt="Facebook Logo" />
        </a>
        <div className="flex items-center md:order-2">
          <div>
            <button
              type="button"
              className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              onClick={() => setonClickUser((prevState) => !prevState)}
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img
                className="w-12 h-12 rounded-full"
                src={profilePhoto}
                alt="profile"
              />
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className={
                onClickUser
                  ? 'visible absolute top-10 right-5 my-4 text-base list-none bg-white rounded divide-y divide-gray-100'
                  : 'hidden'
              }
              id="user-dropdown">
              <div className="py-3 px-4">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            onClick={() => setOnClickMenu((prevState) => !prevState)}
            aria-controls="mobile-menu-2"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className={
            onClickMenu
              ? 'visible justify-between items-center w-full md:flex md:w-auto md:order-1'
              : 'hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
          }
          id="mobile-menu-2">
          <ul class="flex flex-col justify-center items-center bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-normal md:border-0 md:bg-white md:font-Montserrat">
            <li className="h-11 justify-center items-center flex border-t-2 border-blue-700">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 ">
                Notification
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400  ">
                Watch
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400  ">
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 ">
                Groups
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block relative py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 ">
                Messenger
                <BsDot className="hidden md:block md:absolute md:left-6 md:top-4 md:text-red-500 md:w-5 md:h-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block relative py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400">
                Live
                <BsDot className="hidden md:block md:absolute md:left-1 md:top-4 md:text-red-500 md:w-5 md:h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
