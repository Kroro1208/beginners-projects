"use client";
import { useEffect, useMemo, useState } from "react"
import { PlusIcon } from "./icon/PlusIcon"
import { Column, Id, Task } from "../(main)/drag&drop/types";
import { ColumnContainer } from "./ColumnContainer";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

export const KanbanBoard = () => {

  const [columns, setColumns] = useState<Column[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    }
  }))

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // column作成ボタン
  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`
    }
    setColumns([...columns, columnToAdd])
  };

  // column削除ボタン
  const deleteColumn = (id: Id) => {
    const filterColumns = columns.filter((col) => col.id !== id);
    setColumns(filterColumns)
  }

  // column作成ボタン内で使用するidを作成する関数
  const generateId = () => {
    return Math.floor(Math.random() * 1001);
  };

  const onDragStart = (e: DragStartEvent) => {
    console.log(e);
    if (e.active.data.current?.type === "Column") {
      setActiveColumn(e.active.data.current.column);
      return;
    }
  }

  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    const activeColumnId = active?.id;
    const overColumnId = over?.id;
    if (activeColumnId === overColumnId) return;
    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeColumnId);
      const overColumnIndex = columns.findIndex((col) => col.id === overColumnId);
      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    })
  }

  const updateColumn = (id: Id, title: string) => {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });
    setColumns(newColumns);
  }

  const createTask = (columnId: Id) => {
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: `Task ${tasks.length + 1}`
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-auto px-[40px] bg-slate-900">
      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd} sensors={sensors}>
        <div className="m-auto flex gap-4">
          <div className="text-white flex gap-2">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id} column={col}
                  deleteColum={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)} />
              ))}
            </SortableContext>
          </div>
          <button
            onClick={createNewColumn}
            className="h-[60px] w-[30px] min-w-[350px] cursor-pointer text-white flex gap-2
          rounded-lg bg-slate-700 border-gray-500 border-2 p-4 ring-rose-500 hover:ring-2">
            <PlusIcon />
            カラム追加
          </button>
        </div>
        {mounted && createPortal(
          <DragOverlay>
            {activeColumn &&
              <ColumnContainer
                column={activeColumn}
                deleteColum={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                tasks={tasks}
              />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  )
}

