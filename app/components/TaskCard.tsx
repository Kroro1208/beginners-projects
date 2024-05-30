import { useState } from "react";
import { Id, Task } from "../(main)/drag&drop/types"
import { DeleteIcon } from "./icon/DeleteIcon";

interface Props {
    task: Task;
    deleteTask: (id: Id) => void;
    updatedTask: (id: Id, content: string) => void;
}
export const TaskCard = ({ task, deleteTask, updatedTask }: Props) => {
    const [mouseIsOver, setMouseIsOver] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const toggleEditMode = () => {
        setEditMode((prev) => !prev);
        setMouseIsOver(false);
    }
    if (editMode) {
        return (
            <div
                className="relative bg-gray-700 flex text-left hover:ring-2 hover:ring-inset hover:ring-green-400
         items-center border border-slate-600 rounded-lg p-2.5 min-h-[100px] h-[100px] cursor-grab">
                <textarea
                    onBlur={toggleEditMode}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && e.shiftKey) {
                            toggleEditMode();
                        }
                    }}
                    onChange={(e) => updatedTask(task.id, e.target.value)}
                    value={task.content}
                    autoFocus
                    placeholder="タスク内容"
                    className="h-[90%] w-full resize-none border-none rounded bg-transparent text-white focus:outline-none">
                </textarea>
            </div>
        )
    }
    return (
        <div
            onClick={toggleEditMode}
            onMouseEnter={() => {
                setMouseIsOver(true);
            }}
            onMouseLeave={() => {
                setMouseIsOver(false);
            }}
            className="relative bg-gray-700 flex text-left hover:ring-2 hover:ring-inset hover:ring-green-400
         items-center border border-slate-600 rounded-lg p-2.5 min-h-[100px] h-[100px] cursor-grab">
            <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
                {task.content}
            </p>
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
