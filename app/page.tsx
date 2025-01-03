import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-6 justify-center items-center min-h-screen bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75"
        style={{ backgroundImage: "url('/react.png')" }}
      />
      <div className="relative z-10">
        <div className="flex flex-col gap-5 mb-5">
          <h1
            className="text-2xl mt-3 sm:mt-4 md:text-3xl md:mt-5 lg:text-4xl lg:mt-6 font-extrabold bg-clip-text
          text-transparent bg-gradient-to-r from-pink-400 to-red-600 drop-shadow-lg"
          >
            実際にReactアプリを作りながら学ぶ！
          </h1>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-100 mb-3 italic">
            初学者用学習ツール
          </h2>
          <p className="text-xl font-bold text-slate-100 mb-2 italic">
            Skills: Next.js, TypeScript, Tailwind CSS
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl p-4 mb-10">
          <Link href="/count-updown">
            <div
              className="border-2 border-gray-500 rounded-lg bg-sky-200 hover:bg-sky-300
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              1 Count Up&Down
            </div>
          </Link>
          <Link href="/text-change">
            <div
              className="border-2 border-gray-500 rounded-lg bg-red-300 hover:bg-red-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              2 Text On & Off
            </div>
          </Link>
          <Link href="/realtime-text">
            <div
              className="border-2 border-gray-500 rounded-lg bg-indigo-400 hover:bg-indigo-500
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              3 Realtime Text
            </div>
          </Link>
          <Link href="/color-change">
            <div
              className="border-2 border-gray-500 rounded-lg bg-green-300 hover:bg-green-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              4 Change Color
            </div>
          </Link>
          <Link href="/comment">
            <div
              className="border-2 border-gray-500 rounded-lg bg-yellow-300 hover:bg-yellow-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              5 Add Comments
            </div>
          </Link>
          <Link href="/simple-memo">
            <div
              className="border-2 border-gray-500 rounded-lg bg-green-600 hover:bg-green-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              6 Simple Memo
            </div>
          </Link>
          <Link href="/simple-todo">
            <div
              className="border-2 border-gray-500 rounded-lg bg-red-600 hover:bg-red-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              7 Simple Todo
            </div>
          </Link>
          <Link href="/simple-diary">
            <div
              className="border-2 border-gray-500 rounded-lg bg-sky-600 hover:bg-sky-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              8 Simple Diary
            </div>
          </Link>
          <Link href="/convert-number">
            <div
              className="border-2 border-gray-500 rounded-lg bg-slate-300 hover:bg-slate-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              9 Calc Converter
            </div>
          </Link>
          <Link href="/digital-clock">
            <div
              className="border-2 border-gray-500 rounded-lg bg-pink-300 hover:bg-pink-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              10 Digital Clock
            </div>
          </Link>
          <Link href="/random-words">
            <div
              className="border-2 border-gray-500 rounded-lg bg-cyan-500 hover:bg-cyan-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              11 Random Words
            </div>
          </Link>
          <Link href="/traffic-lights">
            <div
              className="border-2 border-gray-500 rounded-lg bg-purple-400 hover:bg-purple-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              12 Traffic Lights
            </div>
          </Link>
          <Link href="/keyboard-app">
            <div
              className="border-2 border-gray-500 rounded-lg bg-red-400 hover:bg-red-600
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              13 Keyboard App
            </div>
          </Link>
          <Link href="/modal-popup">
            <div
              className="border-2 text-white border-gray-500 rounded-lg bg-blue-950 hover:bg-blue-800
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              14 Modal PopUp
            </div>
          </Link>
          <Link href="/stop-watch">
            <div
              className="border-2 border-gray-500 rounded-lg bg-blue-500 hover:bg-blue-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              15 G-shock
            </div>
          </Link>
          <Link href="/harry-potter">
            <div
              className="border-2 border-gray-500 rounded-lg bg-green-500 hover:bg-green-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              16 Harry Potter API
            </div>
          </Link>
          <Link href="/quiz-app">
            <div
              className="border-2 border-gray-500 rounded-lg bg-orange-300 hover:bg-orange-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              17 Quiz App
            </div>
          </Link>
          <Link href="/filter-app">
            <div
              className="border-2 border-gray-500 rounded-lg bg-gray-300 hover:bg-gray-400
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              18 Filtering System
            </div>
          </Link>
          <Link href="/fibonacci">
            <div
              className="border-2 border-gray-500 rounded-lg bg-amber-700 hover:bg-amber-500
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              19 Fibonacci
            </div>
          </Link>
          <Link href="/drag&drop">
            <div
              className="border-2 text-white border-gray-500 rounded-lg bg-blue-950 hover:bg-blue-800
            px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              20 Drag & Drop
            </div>
          </Link>
          <Link href="/redux-toolkit">
            <div
              className="border-2 hover:text-white border-gray-500 rounded-lg bg-green-300 hover:bg-green-400
            px-4 p-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              21 Redux Toolkit Shop Cart
            </div>
          </Link>
          <Link href="/pomodoro-timer">
            <div
              className="border-2 hover:text-white border-gray-500 rounded-lg bg-red-300 hover:bg-red-800
            px-4 p-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              22 Pomodoro-Timer
            </div>
          </Link>
          <Link href="/jotai">
            <div
              className="border-2 hover:text-white border-gray-500 rounded-lg bg-sky-300 hover:bg-sky-400
            px-4 p-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              23 jotai
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
