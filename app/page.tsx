import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h1 className="mt-5 text-3xl font-bold flex justify-center items-center">
        Main Page
      </h1>
      <h2>Project Name</h2>
      <Link href="/countUp">
        <button className="border-2 border-black px-3 py-2 rounded-lg bg-sky-200">カウントアップ</button>
      </Link>
      <Link href="/textChange">
        <button className="border-2 border-black px-3 py-2 rounded-lg bg-red-300">テキストチェンジ</button>
      </Link>
      <Link href="/realTimeText">
        <button className="border-2 border-black px-3 py-2 rounded-lg bg-indigo-400">リアルタイムテキスト</button>
      </Link>
      <Link href="/colorChange">
        <button className="border-2 border-black px-3 py-2 rounded-lg bg-green-300">カラーチェンジ</button>
      </Link>

    </div>
  );
}
