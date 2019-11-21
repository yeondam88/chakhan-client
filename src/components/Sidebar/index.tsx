import React from 'react';

type Props = {
  state: {
    isOpen: Boolean;
  };
};

function Sidebar({ state }: Props) {
  return (
    <aside
      className={`fixed left-0 bottom-0 z-10 overflow-y-auto w-64 bg-gray-200 ${
        state.isOpen ? 'active' : ''
      }`}
      style={{ top: '82.64px' }}
    ></aside>
  );
}

export default Sidebar;
