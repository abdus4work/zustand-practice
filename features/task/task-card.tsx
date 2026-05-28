import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import github from "@/public/github.svg"
import Link from "next/link";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <Card className={"max-w-sm pt-0"}>
      <div className={"w-full h-52 relative"}>
        <Image
          src={"https://picsum.photos/id/4/200/300"}
          fill
          className={"object-cover"}
          alt={task.title}
        />
      </div>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardFooter className={"flex justify-between"}>
        <Button variant={'outline'} className={'flex justify-center items-center'}>
        <Image src={github} width={20} height={20} className={''} alt={'github'}/>
          <span> Code</span>
        </Button>
        <Button>
          <Link href={`/task/${task.slug}`}>
            View Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default TaskCard;
