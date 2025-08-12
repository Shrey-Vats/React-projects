import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

// Assuming Task interface is in a shared file, e.g., 'types.ts'
interface Task {
  id: string;
  task: string;
  completed: boolean;
}

interface TaskFormProps {
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export const TaskForm = ({ setTasks }: TaskFormProps) => {
  // Renamed state to avoid conflict with props and be more descriptive
  const [inputValue, setInputValue] = useState("");

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prevent adding empty or whitespace-only tasks
    if (inputValue.trim() === "") return;

    const newTask: Task = {
      // Use crypto.randomUUID() for truly unique IDs
      id: crypto.randomUUID(),
      task: inputValue,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInputValue(""); // Clear input after submission
  };

  return (
    <form onSubmit={formHandler} className="flex gap-2 mb-8">
      <input
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-grow p-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow"
      />
      <button
        type="submit"
        disabled={inputValue.trim() === ""}
        className="bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed"
      >
        Add Task
      </button>
    </form>
  );
};