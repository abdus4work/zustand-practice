import TaskCard from "@/features/task/task-card";
import { cn } from "@/lib/utils";
import { Task } from "@/features/task/type";

type Props = {
  tasks: Task[];
  className?: string;
};

const TaskList = ({tasks=[],className}:Props) => {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",className)}>
      {tasks.length === 0 ? (
        <p>No Task Found</p>
      ) : (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
};
export default TaskList;
