import { Metadata } from "next";
import { TASKS } from "@/features/task/task";
import TaskList from "@/features/task/task-list";

export const metadata: Metadata = {
  title: "Tasks | Zustand Practice",
};
const Page = () => {
  return (
    <div className={'space-y-5'}>
      <h1 className={"text-2xl mb-5"}>Zustand Tasks</h1>
      <TaskList tasks={TASKS} />
    </div>
  );
};
export default Page;
