import React from 'react';
import Logo from '../../images/default.svg';

type Props = {
  state: any;
  setState: any;
};

function Header({ state, setState }: Props) {
  function onClick() {
    setState({ isOpen: !state.isOpen });
  }

  return (
    <header
      className="flex items-center fixed top-0 left-0 right-0 z-20 bg-white shadow"
      style={{ height: '82.64px' }}
    >
      <div className="sidebar-button" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            className="heroicon-ui"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </div>
      <div className="logo-container">
        <img className="w-64 object-cover p-4" src={Logo} alt="" />
      </div>

      <div className="">
        <div className="flex items-center px-8">
          <div className="relative w-64">
            <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
              <svg
                className="h-5 w-5 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="heroicon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                />
              </svg>
            </span>
            <input
              className="input pl-10 pr-4 py-2 block w-full bg-gray-300 rounded-lg text-sm placeholder-gray-600 text-white focus:bg-white focus:placeholder-gray-700 focus:text-gray-600"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
