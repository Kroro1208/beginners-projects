import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-800 drop-shadow-lg">
        Reactアプリを作りながら学べる！
      </h1>
      <h2 className="text-2xl font-bold text-gray-600 mb-5 italic">
        初学者用学習ツール
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        <Link href="/count-updown">
          <div className="border-2 border-black rounded-lg bg-sky-200 hover:bg-sky-300
          px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer">
            カウントアップ
          </div>
        </Link>
        <Link href="/text-change">
          <div className="border-2 border-black rounded-lg bg-red-300 hover:bg-red-400
          px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer">
            テキストチェンジ
          </div>
        </Link>
        <Link href="/realtime-text">
          <div className="border-2 border-black rounded-lg bg-indigo-400 hover:bg-indigo-500
          px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer">
            リアルタイムテキスト
          </div>
        </Link>
        <Link href="/color-change">
          <div className="border-2 border-black rounded-lg bg-green-300 hover:bg-green-400
          px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer">
            カラーチェンジ
          </div>
        </Link>
        <Link href="/comment">
          <div className="border-2 border-black rounded-lg bg-yellow-300 hover:bg-yellow-400
          px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer">
            コメント機能
          </div>
        </Link>
        <Link href="/convert-number">
          <div className="border-2 border-black rounded-lg bg-slate-300 hover:bg-slate-400
          px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer">
            数値変換
          </div>
        </Link>
        <Link href="/quiz-app">
          <div className="border-2 border-black rounded-lg bg-orange-300 hover:bg-orange-400
          px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer">
            クイズアプリ
          </div>
        </Link>
        <Link href="/digital-clock">
          <div className="border-2 border-black rounded-lg bg-pink-300 hover:bg-pink-400
          px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer">
            デジタル時計
          </div>
        </Link>
      </div>
    </div>
  );
}
