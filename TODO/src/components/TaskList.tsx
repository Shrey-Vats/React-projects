import { useState, type Dispatch, type SetStateAction } from "react";
import TaskItems from "./TaskItems";
import type { Task } from "../types/task";
import { FaChevronDown } from 'react-icons/fa';

const TaskList = ({ tasks, setTasks }: { tasks: Task[]; setTasks: Dispatch<SetStateAction<Task[]>> }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    if (tasks.length === 0) {
        return (
            <p className="text-slate-500 text-center mt-12 text-lg italic">
                Looks like you're all caught up! ☕️
            </p>
        );
    }

    const selectedField = tasks.filter(task => {
        if (selectedCategory === "Completed") return task.completed;
        if (selectedCategory === "Pending") return !task.completed;
        return task;
    });

    selectedField.sort((a: Task, b: Task): number => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
    });

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    };

    return (
        <>
            <div className="relative mb-6">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-left bg-slate-800 p-3 rounded-xl border border-slate-700 flex justify-between items-center text-slate-300 hover:border-sky-500 transition-colors"
                >
                    <span className="font-semibold">{selectedCategory} Tasks</span>
                    <FaChevronDown className={`transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                {isDropdownOpen && (
                    <ul className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-lg animate-fade-in transition-all duration-300">
                        {["ALL", "Completed", "Pending"].map(category => (
                            <li
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`p-3 cursor-pointer hover:bg-slate-700 rounded-xl transition-colors ${selectedCategory === category ? 'text-sky-400 font-bold' : 'text-slate-300'}`}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <ul className="space-y-4">
                {selectedField.map((task) => (
                    <TaskItems task={task} key={task.id} setTasks={setTasks} />
                ))}
            </ul>
        </>
    );
};

export default TaskList;