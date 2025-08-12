import { type Dispatch, type SetStateAction } from "react";
import TaskItems from "./TaskItems";

type Task = {
    id: string;
    task: string;
    completed: boolean;
};

const TaskList = ({ tasks, setTasks }: { tasks: Task[]; setTasks: Dispatch<SetStateAction<Task[]>> }) => {

    if (tasks.length === 0) {
        return <p className="text-slate-400 text-center mt-8">Ready To do Something begger dur</p>
    }

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItems tasks={tasks} key={task.id} setTasks={setTasks}/>
            ))}
        </ul>
    )
}

export default TaskList