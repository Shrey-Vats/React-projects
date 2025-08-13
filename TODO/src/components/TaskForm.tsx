import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Task } from "../types/Task";

interface TaskFormProps {
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export const TaskForm = ({ setTasks }: TaskFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      task: inputValue,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInputValue("");
  };

  return (
    <form onSubmit={formHandler} className="flex gap-3 mb-8">
      <input
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        placeholder="What's on your agenda today?"
        className="flex-grow p-4 bg-bg-secondary border border-border-color rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 transition-shadow duration-200 text-lg"
      />
      <button
        type="submit"
        disabled={inputValue.trim() === ""}
        className="bg-sky-600 dark:bg-sky-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-sky-700 dark:hover:bg-sky-600 transition-colors duration-300 disabled:bg-slate-300 disabled:text-slate-500 dark:disabled:bg-slate-700 dark:disabled:text-slate-400 disabled:cursor-not-allowed text-lg"
      >
        Add
      </button>
    </form>
  );
};