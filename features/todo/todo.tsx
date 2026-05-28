'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Empty from "@/public/E-Commerce 03.svg";
import { Input } from "@/components/ui/input";
import { Filter, useTodoStore } from "@/features/todo/todo-store";
import TodoItem from "@/features/todo/todo-item";
import Image from "next/image";

const Todo = () => {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleCompleted = useTodoStore((state) => state.toggleCompleted);
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);
  const [todoTitle, setTodoTitle] = useState("");

  const filteredTodos = todos.filter((item) => {
    if (filter === "active") return item.isCompleted === false;
    if (filter === "completed") return item.isCompleted === true;
    return item;
  });

  function handleAddTodo() {
    addTodo(todoTitle);
    setTodoTitle("");
  }
  return (
    <Card className="h-fit w-full ">
      <CardHeader>
        <CardTitle>Todos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex gap-2">
          <Input
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleAddTodo() : "")}
            className="h-10"
            placeholder="Add new Todos"
          />
          <Button className="h-10 px-4" onClick={handleAddTodo}>
            Add
          </Button>
        </div>
        <Select
          defaultValue={filter}
          onValueChange={(v: Filter) => setFilter(v)}
        >
          <SelectTrigger className="w-1/2">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="active">Active</SelectItem>
          </SelectContent>
        </Select>
        <Separator className="my-4" />
        <div className="h-80 scrollbar-thin scrollbar-thumb-emerald-300 space-y-2 overflow-y-scroll p-2">
          {filteredTodos.length === 0 ? (
            <div className="flex justify-center items-center text-2xl text-muted-foreground">
              <Image src={Empty} alt={'Empty'} className={'w-50 h-50'} />
            </div>
          ) : (
            filteredTodos.map((item) => (
              <TodoItem
                title={item.title}
                isCompleted={item.isCompleted}
                key={item.id}
                id={item.id}
                onDelete={removeTodo}
                onToggleCompleted={toggleCompleted}
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
export default Todo;
