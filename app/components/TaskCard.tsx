import { useState } from "react";
import { Id, Task } from "../(main)/drag&drop/types"
import { DeleteIcon } from "./icon/DeleteIcon";

interface Props {
    task: Task;
    deleteTask: (id: Id) => void;
}
export const TaskCard = ({ task, deleteTask }: Props) => {
    const [mouseIsOver, setMouseIsOver] = useState(false);
    return (
        <div
            onMouseEnter={() => {
                setMouseIsOver(true);
            }}
            onMouseLeave={() => {
                setMouseIsOver(false);
            }}
            className="relative bg-gray-700 flex text-left hover:ring-2 hover:ring-inset hover:ring-green-400
         items-center border border-slate-600 rounded-lg p-2.5 min-h-[100px] h-[100px] cursor-grab">
            {task.content}
            {mouseIsOver &&
                <button
                    onClick={() => {
                        deleteTask(task.id);
                    }}
                    className="stroke-white absolute right-4 top-1/2 -translate-y-1/2
                 bg-red-600 rounded p-2 opacity-50 hover:opacity-100">
                    <DeleteIcon />
                </button>}
        </div>
    )
}
