import { useSortable } from "@dnd-kit/sortable";
import { Column } from "../(main)/drag&drop/types"
import { DeleteIcon } from "./icon/DeleteIcon";
import { CSS } from "@dnd-kit/utilities";

interface Props {
    column: Column;
    deleteColum: (id: string | number) => void;
}
export const ColumnContainer = (props: Props) => {
    const { column, deleteColum } = props;
    const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        }
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
            >

            </div>
        )
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="bg-slate-800 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
            <div
                {...attributes}
                {...listeners}
                className="bg-sky-700 h-[60px] cursor-grab rounded-md rounded-b-none p-3
            font-bold border-slate-700 border-4 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="flex justify-center items-center bg-slate-700 px-2 py-1 text-sm rounded-full">
                        {column.id}
                    </div>
                    {column.title}
                </div>
                <button onClick={() => {
                    deleteColum(column.id)
                }}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    )
}