import { useEffect, useState } from "react";
import { TaskForm } from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Task } from "./types/task"; // Using a separate types file for better organization

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const localData = localStorage.getItem("tasks");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to parse tasks from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className="bg-slate-950 min-h-screen flex flex-col items-center pt-10 px-4 font-sans text-slate-100">
      
      <div className="w-full max-w-2xl bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800">
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-400 text-center mb-10 tracking-wide">
          Task Board Pro 🚀
        </h1>
        <TaskForm setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
};

export default App;