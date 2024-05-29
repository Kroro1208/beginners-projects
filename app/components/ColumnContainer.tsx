import { Column } from "../(main)/drag&drop/types"
import { DeleteIcon } from "./icon/DeleteIcon";

interface Props {
    column: Column;
    deleteColum: (id: string | number) => void;
}
export const ColumnContainer = (props: Props) => {
    const { column, deleteColum } = props;

    return (
        <div className="bg-slate-800 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
            <div className="bg-sky-700 h-[60px] cursor-grab rounded-md rounded-b-none p-3
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