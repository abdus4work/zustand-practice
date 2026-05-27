import { Metadata } from "next";
import TaskCard from "@/features/task/task-card";
import { TASKS } from "@/features/task/task";

export const metadata: Metadata = {
  title: "Zustand Practice | Task",
};
const Page = () => {
  return (
    <div className={""}>
      Page
      {TASKS.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
export default Page;
