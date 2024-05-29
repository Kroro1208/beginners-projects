"use client";
import { useState } from "react"
import { PlusIcon } from "./icon/PlusIcon"
import { Column } from "../(main)/drag&drop/types";
import { ColumnContainer } from "./ColumnContainer";

export const TaskCard = () => {

  const [columns, setColumns] = useState<Column[]>([]);
  console.log(columns);

  // column作成ボタン
  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`
    }
    setColumns([...columns, columnToAdd])
  };

  // column削除ボタン
  const deleteColumn = (id: string | number) => {
    const filterColumns = columns.filter((col) => col.id !== id);
    setColumns(filterColumns)
  }

  // column作成ボタン内で使用するidを作成する関数
  const generateId = () => {
    return Math.floor(Math.random() * 1001);
  };

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-auto px-[40px] bg-slate-900">
      <div className="m-auto flex gap-4">
        <div className="text-white flex gap-2">
          {columns.map((col) => (
            <ColumnContainer key={col.id} column={col} deleteColum={deleteColumn} />
          ))}
        </div>
        <button
          onClick={createNewColumn}
          className="h-[60px] w-[30px] min-w-[350px] cursor-pointer text-white flex gap-2
        rounded-lg bg-slate-700 border-gray-500 border-2 p-4 ring-rose-500 hover:ring-2">
          <PlusIcon />
          カラム追加
        </button>
      </div>
    </div>
  )
}

