import React from 'react';
import Card from '../Shared/Card';

const collection1 = [2403558, 2384071, 2403558, 874077];
const collection2 = [2283835, 1963993, 4362062, 3667316];
const collection3 = [1262769, 197345, 312299, 251966];

function Main() {
  return (
    <main
      className="block pl-64 bg-gray-300 h-full"
      style={{ marginTop: '82.64px' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-4">
          <h1>Find your restaurants</h1>
        </div>
        <Card collectionId={collection1} />
        <Card collectionId={collection2} />
        <Card collectionId={collection3} />
      </div>
    </main>
  );
}

export default Main;
