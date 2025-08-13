import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { Task } from "../types/Task";
import { FaEdit, FaTrashAlt, FaSave, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const TaskItems = ({ task, setTasks }: { task: Task; setTasks: Dispatch<SetStateAction<Task[]>> }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);

  const handlerCompleted = () => {
    setTasks(prev => prev.map(i => i.id === task.id ? { ...i, completed: !task.completed } : i));
  };

  const handlerDelete = () => {
    setTasks(prev => prev.filter(i => i.id !== task.id));
  };

  const onEditing = () => {
    setIsEditing(true);
  };

  const onEditingCompleted = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks(prev => prev.map(i => i.id === task.id ? { ...i, task: newTask } : i));
    setIsEditing(false);
  };

  return (
    <li className={`flex items-center justify-between p-4 rounded-xl shadow-md transition-all duration-300 ${task.completed ? 'bg-bg-secondary border-l-4 border-emerald-500' : 'bg-bg-primary border-l-4 border-transparent hover:bg-hover-bg'}`}>
      {isEditing ? (
        <form onSubmit={onEditingCompleted} className="flex-grow flex items-center gap-3">
          <input
            type="text"
            value={newTask}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
            className="flex-grow p-3 bg-bg-secondary border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow"
          />
          <button
            type="submit"
            className="text-white p-3 rounded-lg bg-sky-600 hover:bg-sky-700 transition-colors"
          >
            <FaSave />
          </button>
        </form>
      ) : (
        <>
          <div className="flex items-center gap-4 flex-grow">
            <button
              onClick={handlerCompleted}
              className={`p-1 text-2xl transition-colors duration-200 ${task.completed ? 'text-emerald-500' : 'text-text-secondary hover:text-sky-600 dark:hover:text-sky-400'}`}
            >
              {task.completed ? <FaCheckCircle /> : <FaRegCircle />}
            </button>
            <p className={`flex-grow text-lg font-medium ${task.completed ? 'line-through text-text-secondary' : 'text-text-primary'}`}>
              {task.task}
            </p>
          </div>
          <div className="flex gap-2 ml-4">
            <button
              onClick={onEditing}
              className="text-text-secondary p-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <FaEdit />
            </button>
            <button
              onClick={handlerDelete}
              className="text-text-secondary p-2 hover:text-red-500 transition-colors"
            >
              <FaTrashAlt />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItems;