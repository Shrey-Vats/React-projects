import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Task } from "../types/task";

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
        className="flex-grow p-4 bg-slate-800 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow duration-200 text-lg"
      />
      <button
        type="submit"
        disabled={inputValue.trim() === ""}
        className="bg-sky-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-sky-700 transition-colors duration-300 disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed text-lg"
      >
        Add
      </button>
    </form>
  );
};