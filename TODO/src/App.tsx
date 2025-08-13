import { useEffect, useState } from "react";
import { TaskForm } from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Task } from "./types/Task";
import { FaSun, FaMoon } from "react-icons/fa";
import { useThemeToggle } from "./hooks/useThemeToggle";


const App = () => {
  const { theme, toggleTheme } = useThemeToggle();

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
    <main className="bg-bg-secondary min-h-screen flex flex-col items-center pt-10 px-4 font-sans text-text-primary transition-colors duration-500">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-3 rounded-full bg-bg-primary text-text-primary shadow-lg transition-colors duration-300"
      >
        {theme === "dark" ? (
          <FaSun className="text-xl text-yellow-400" />
        ) : (
          <FaMoon className="text-xl text-sky-600" />
        )}
      </button>

      <div className="w-full max-w-2xl bg-bg-primary p-8 rounded-2xl shadow-2xl border border-border-color">
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-600 dark:text-sky-400 text-center mb-10 tracking-wide">
          Task Board Pro 🚀
        </h1>
        <TaskForm setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
};

export default App;
