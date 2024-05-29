"use client";
import { useState } from "react"
import { PlusIcon } from "./icon/PlusIcon"
import { Column } from "../(main)/drag&drop/types";

export const TaskCard = () => {

  const [columns, setColumns] = useState<Column[]>([]);
  console.log(columns);

  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`
    }
    setColumns([...columns, columnToAdd])
  };

  const generateId = () => {
    return Math.floor(Math.random() * 10001);
  };

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-auto px-[40px] bg-slate-900">
      <div className="m-auto">
        <button
          onClick={createNewColumn}
          className="h-[60px] w-[30px] min-w-[350px] cursor-pointer text-white flex gap-2
        rounded-lg bg-slate-700 border-gray-500 border-2 p-4 ring-rose-500 hover:ring-2">
          <PlusIcon />
          タスク追加
        </button>
      </div>
    </div>
  )
}
