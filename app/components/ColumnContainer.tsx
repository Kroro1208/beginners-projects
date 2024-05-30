import { useSortable } from "@dnd-kit/sortable";
import { Column, Id, Task } from "../(main)/drag&drop/types"
import { DeleteIcon } from "./icon/DeleteIcon";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { PlusIcon } from "./icon/PlusIcon";
import { TaskCard } from "./TaskCard";

interface Props {
    column: Column;
    deleteColum: (id: Id) => void;
    updateColumn: (id: Id, title: string) => void;
    createTask: (columnId: Id) => void;
    deleteTask: (id: Id) => void;
    tasks: Task[];
}
export const ColumnContainer = (props: Props) => {
    const { column, deleteColum, updateColumn, createTask, tasks, deleteTask } = props;
    const [editMode, setEditMode] = useState(false);
    const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        },
        disabled: editMode
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    if (isDragging) {
        return (
            <div ref={setNodeRef} style={style}
                className="bg-slate-800 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col
                opacity-40 border-2 border-rose-500"
            />
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="bg-slate-800 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
            <div
                {...attributes}
                {...listeners}
                onClick={() => setEditMode(true)}
                className="bg-sky-700 h-[60px] cursor-grab rounded-md rounded-b-none p-3
            font-bold border-slate-700 border-4 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="flex justify-center items-center bg-slate-700 px-2 py-1 text-sm rounded-full">
                        {!editMode && column.id}
                        {editMode &&
                            <input autoFocus
                                className="bg-gray-900 focus:border-rose-300 border rounded outline-none px2"
                                value={column.title}
                                onChange={(e) => updateColumn(column.id, e.target.value)}
                                onBlur={() => { setEditMode(false) }}
                                onKeyDown={(e) => {
                                    if (e.key !== "Enter") return;
                                    setEditMode(false);
                                }} />}
                    </div>
                    {column.title}
                </div>
                <button onClick={() => {
                    deleteColum(column.id)
                }}>
                    <DeleteIcon />
                </button>
            </div>
            <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
                ))}
            </div>
            <button
                onClick={() => {
                    createTask(column.id);
                }}
                className="flex gap-2 items-center border-sky-900 border-2 rounded-md p-4
             border-x-slate-600 hover:bg-gray-700 hover:text-green-400 active:bg-black">
                <PlusIcon />
                タスク追加
            </button>
        </div>
    )
}