import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  const [state, setState] = useState({ isOpen: false });

  return (
    <div className="h-screen relative flex flex-col">
      <Header state={state} setState={setState} />
      <Sidebar state={state} />
      <Main />
    </div>
  );
}

export default App;
