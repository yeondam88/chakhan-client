import React from 'react';
import Select from '../Shared/Select';
import Input from '../Shared/Input';

type Props = {
  state: {
    isOpen: Boolean;
  };
};

const options = [
  {
    value: 1,
    name: '꿈나무'
  },
  {
    value: 2,
    name: '소방공무원'
  },
  {
    value: 3,
    name: '경찰공무원'
  }
];

const options2 = [
  {
    value: 1,
    name: '서울'
  },
  {
    value: 2,
    name: '대전'
  },
  {
    value: 3,
    name: '울산'
  }
];

const options3 = [
  {
    value: 1,
    name: '~만원'
  },
  {
    value: 2,
    name: '1만원-2만원'
  },
  {
    value: 3,
    name: '3만원~'
  }
];

function Sidebar({ state }: Props) {
  return (
    <aside
      className={`fixed left-0 bottom-0 z-10 overflow-y-auto w-64 bg-gray-200 ${
        state.isOpen ? 'active' : ''
      }`}
      style={{ top: '82.64px' }}
    >
      <div className="block p-3">
        <div className="w-full lg:pr-2 mb-4">
          <Select
            elemId="type"
            label="분야"
            options={options}
            className="input select"
          />
        </div>
        <div className="w-full lg:pr-2 mb-4">
          <Select
            elemId="type"
            label="지역"
            options={options2}
            className="input select"
          />
        </div>
      </div>

      <hr className="w-full border-gray-400" />

      <div className="block p-3">
        <div className="w-full lg:pr-2 mb-4">
          <Select
            elemId="type"
            label="가격"
            options={options3}
            className="input select"
          />
        </div>
      </div>

      <div className="block p-3">
        <div className="w-full lg:pr-2 mb-4">
          <Input
            elemId="keyword"
            label="키워드"
            placeholder="키워드"
            className="input"
          />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
