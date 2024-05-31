"use client";
import { useEffect, useMemo, useState } from "react"
import { PlusIcon } from "./icon/PlusIcon"
import { Column, Id, Task } from "../(main)/drag&drop/types";
import { ColumnContainer } from "./ColumnContainer";
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { TaskCard } from "./TaskCard";

export const KanbanBoard = () => {

  const [columns, setColumns] = useState<Column[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    }
  }))

  const [mounted, setMounted] = useState(false); // mountedでコンポーネントがマウントされたかどうかを追跡

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
    setColumns(filterColumns);
    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
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
    if (e.active.data.current?.type === "Task") {
      setActiveTask(e.active.data.current.task);
      return;
    }
  }

  const onDragEnd = (e: DragEndEvent) => {
    setActiveColumn(null);
    setActiveTask(null);
    const { active, over } = e;
    if (!over) return;
    const activeId = active?.id;
    const overId = over?.id;

    // カラム全体のドラッグ＆ドロップ
    if (activeId === overId) return;
    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
      const overColumnIndex = columns.findIndex((col) => col.id === overId);
      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    })
  }

  const onDragOver = (e: DragOverEvent) => {
    const { active, over } = e;
    if (!over) return; // ドラッグ中の要素が他の要素の上にない場合

    const activeId = active?.id;
    const overId = over?.id;

    if (activeId === overId) return; // ドラッグしている要素が自分自身の上にある場合(つまり移動していない場合)
    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";

    if (!isActiveTask) return;

    if (isActiveTask && isOverTask) {
      setTasks((tasks) => {
        const activeIndex = tasks?.findIndex((t) => t.id === activeId);
        const overIndex = tasks?.findIndex((t) => t.id === overId);

        tasks[activeIndex].columnId = tasks[overIndex].columnId; // 移動先のカラムにタスクを入れる

        return arrayMove(tasks, activeIndex, overIndex); // タスクの順序を変更
      });
    }

    const isOverColumn = over.data.current?.type === "Column"; // 現在ドラッグしているタスクがカラム上にあるか

    if (isActiveTask && isOverColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks?.findIndex((t) => t.id === activeId);
        tasks[activeIndex].columnId = overId;

        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
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

  const updatedTask = (id: Id, content: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });
    setTasks(newTasks);
  }


  const deleteTask = (id: Id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className="m-auto flex flex-col items-center min-h-screen w-full overflow-x-auto overflow-y-auto px-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold text-white my-8">Awesome Task Management Board</h1>
      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver} sensors={sensors}>
        <div className="flex gap-4">
          <div className="text-white flex gap-2">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  deleteColum={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  updatedTask={updatedTask}
                  deleteTask={deleteTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                />
              ))}
            </SortableContext>
          </div>
          <button
            onClick={createNewColumn}
            className="h-[60px] w-[30px] min-w-[350px] cursor-pointer text-white flex gap-2 items-center justify-center
            rounded-lg bg-slate-700 border-gray-500 border-2 p-4 ring-green-500 hover:ring-2 transition-all duration-300">
            <PlusIcon />
            タスクボード追加
          </button>
        </div>
        {mounted && createPortal(
          <DragOverlay>
            {activeColumn &&
              (<ColumnContainer
                column={activeColumn}
                deleteColum={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                updatedTask={updatedTask}
                deleteTask={deleteTask}
                tasks={tasks.filter((task) => task.columnId === activeColumn.id)}
              />)}
            {activeTask && <TaskCard task={activeTask} deleteTask={deleteTask} updatedTask={updatedTask} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  )
}

