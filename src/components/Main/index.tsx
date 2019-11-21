import React from 'react';

function Main() {
  return (
    <main
      className="block pl-64 bg-gray-300 h-full"
      style={{ marginTop: '82.64px' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="px-8 py-4">
          <h1>Find your restaurants</h1>
        </div>
        <div className="flex flex-wrap flex-start w-full justify-between items-center px-4">
          <div className="lg:w-1/3 w-full px-4 border rounded-lg card relative">
            <img
              className="h-48 w-full rounded-lg object-cover card-img"
              src="https://source.unsplash.com/collection/1536566/800x600"
            />
            <div className="absolute left-0 right-0 card-content mx-auto p-6 bg-white w-5/6 rounded-lg shadow">
              <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                  서울
                </span>
                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                  꿈나무 &bull; 소방공무원
                </div>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                진짜파스타
              </h4>

              <div className="mt-1 text-gray-600 text-sm">분야: 국수</div>
              <div className="mt-1 text-gray-600 text-sm">
                영업시간: 월,금 09:00-15:00
              </div>
              <div className="mt-1 flex items-center">
                <span className="text-gray-600 text-sm">300 reviews</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full px-4 relative border rounded-lg card lg:mt-0 mt-20">
            <img
              className="h-48 w-full rounded-lg object-cover card-img"
              src="https://source.unsplash.com/collection/2403558/800x600"
            />
            <div className="absolute left-0 right-0 card-content mx-auto p-6 bg-white w-5/6 rounded-lg shadow">
              <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                  울산
                </span>
                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                  꿈나무
                </div>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                Mrs(미세스)족발
              </h4>
              <div className="mt-1 text-gray-600 text-sm">분야: 족발</div>
              <div className="mt-1 text-gray-600 text-sm">
                영업시간: 월,금 09:00-15:00
              </div>
              <div className="mt-1 flex items-center">
                <span className="text-gray-600 text-sm">152 reviews</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full px-4 relative border rounded-lg card lg:mt-0 mt-20">
            <img
              className="card-img h-48 w-full rounded-lg object-cover"
              src="https://source.unsplash.com/collection/1134892/800x600"
            />
            <div className="absolute left-0 right-0 card-content mx-auto p-6 bg-white w-5/6 rounded-lg shadow">
              <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                  부산
                </span>
                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                  꿈나무 &bull; 소방공무원
                </div>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                오봉산칼국수(도화동)
              </h4>
              <div className="mt-1 text-gray-600 text-sm">분야: 부대찌게</div>
              <div className="mt-1 text-gray-600 text-sm">
                영업시간: 월,금 09:00-15:00
              </div>
              <div className="mt-1 flex items-center">
                <span className="text-gray-600 text-sm">233 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
