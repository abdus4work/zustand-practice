import { notFound } from "next/navigation";
import { TASKS } from "@/features/task/task";

const Page = async({params}:{params:Promise<{slug:string}>}) => {
  const {slug} = await params;
  const task = TASKS.find((task)=>task.slug === slug)
  if(!task) notFound()
  return (
    <div>Page : {slug}</div>
  );
};
export default Page;
