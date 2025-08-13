import { type Dispatch, type SetStateAction } from "react";
import TaskItems from "./TaskItems";
import type { Task } from "../types/task";

const TaskList = ({ tasks, setTasks }: { tasks: Task[]; setTasks: Dispatch<SetStateAction<Task[]>> }) => {
  if (tasks.length === 0) {
    return (
      <p className="text-slate-500 text-center mt-12 text-lg italic">
        Looks like you're all caught up! ☕️
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <TaskItems task={task} key={task.id} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default TaskList;