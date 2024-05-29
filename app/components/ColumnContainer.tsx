import { Column } from "../(main)/drag&drop/types"

interface Props {
    column: Column;
}
export const ColumnContainer = (props: Props) => {
    const { column } = props;
    return (
        <div className="bg-slate-800 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
            {column.title}
        </div>
    )
}