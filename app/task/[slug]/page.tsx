import { notFound } from "next/navigation";
import { TASKS } from "@/features/task/task";
import CopyWrapper from "@/components/copy-wraper";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const task = TASKS.find((task) => task.slug === slug);
  const TaskComponent = task?.component;
  if (!task) notFound();
  return (
    <div className={"flex gap-7 flex-col lg:flex-row"}>
      <div className={"lg:w-1/2 p-4 space-y-5"}>
        <div className={"space-y-2"}>
          <h1 className={"text-3xl font-bold"}>{task.title}</h1>
          <p className={"text-muted-foreground max-w-2xl"}>
            {task.description}
          </p>
        </div>
        {TaskComponent && <TaskComponent />}
      </div>
      <div className={"flex-1 p-4 gap-5 flex flex-col"}>
        <div className={"space-y-2"}>
          <h2 className={"text-3xl font-bold"}>Explanation</h2>
          <p className={"text-muted-foreground max-w-2xl"}>
            {task.explanation?.description}
          </p>
        </div>
        <div>
          <h2 className={"text-2xl font-medium text-amber-400"}>Features:</h2>
          <ul className={"list-disc list-inside"}>
            {task.explanation?.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={"text-2xl font-medium text-amber-400"}>Concepts:</h2>
          <ul className={"list-disc list-inside"}>
            {task.explanation?.concept.map((concept, ind) => (
              <li key={ind}>{concept}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={"text-2xl font-medium text-amber-400"}>Code:</h2>

          <pre
            className={
              "bg-gray-800 text-white p-4 rounded-lg  h-60  relative"
            }
          >
            <CopyWrapper tag={"code"}>{task.explanation?.code}</CopyWrapper>
          </pre>
        </div>
      </div>
    </div>
  );
};
export default Page;
