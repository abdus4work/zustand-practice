import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import github from "@/public/github.svg";
import Link from "next/link";
import { Task } from "@/features/task/type";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <Card className={"max-w-sm overflow-hidden pt-0 shadow-md"}>
      <div className={"w-full aspect-video relative"}>
        <Image
          src={task.previewImage==='' ? "/screenshots/placeholder-image.svg" : task.previewImage}
          fill
          className={"object-contain  bg-emerald-200"}
          alt={task.title}
        />
      </div>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription className={'line-clamp-3'}>{task.description}</CardDescription>
      </CardHeader>
      <CardFooter className={"flex justify-between"}>
        <Button
          className={
            "bg-emerald-400 hover:bg-emerald-500 w-full cursor-pointer"
          }
          asChild
        >
          <Link href={`/task/${task.slug}`}>View Demo</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default TaskCard;
