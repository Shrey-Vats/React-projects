import { useEffect, useState } from "react";
import { TaskForm } from "./components/TaskForm";
import TaskList from "./components/TaskList";

// The Task interface is better defined here or in a dedicated types.ts file
export interface Task {
  id: string;
  task: string;
  completed: boolean; // Changed from 'status' to a more common 'completed' boolean
}

const App = () => {
  // Initialize state from a function to avoid running localStorage on every render
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const localData = localStorage.getItem("tasks");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to parse tasks from localStorage", error);
      return [];
    }
  });

  // Effect to update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    // Main container with a dark background, centered content
    <main className="bg-slate-900 min-h-screen flex flex-col items-center pt-10 sm:pt-20 px-4 font-sans">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
          My Task Board
        </h1>
        
        {/* Pass the state setter to the form */}
        <TaskForm setTasks={setTasks} />
        
        {/* Pass tasks and the setter to the list */}
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
};

export default App;