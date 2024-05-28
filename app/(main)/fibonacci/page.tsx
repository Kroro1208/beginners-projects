const Practice = () => {
  // フィボナッチジェネレータ関数
  function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
      yield a; // .valueはこの部分
      [a, b] = [b, a + b];
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-6xl mb-10 font-bold text-gray-800 bg-white p-4 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-110">
        結果
      </div>
      <div className="flex space-x-4 mt-10">
        <button
          onClick={}
          className="px-6 py-3 text-xl font-bold text-white bg-green-500 rounded hover:bg-green-600 transition"
        >
          Start
        </button>
        <button
          onClick={}
          className="px-6 py-3 text-xl font-bold text-white bg-red-500 rounded hover:bg-red-600 transition"
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Practice;
