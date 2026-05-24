import { Button } from "@/components/ui/button.tsx"
import { Checkbox } from "@/components/ui/checkbox.tsx"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Trash2 } from "lucide-react"

type TodoItemProps = {
  title: string
  isCompleted: boolean
  onDelete: (id: number) => void
  id: number
  onToggleCompleted: (id: number) => void
}

const TodoItem = ({
  title,
  isCompleted,
  onDelete,
  onToggleCompleted,
  id,
}: TodoItemProps) => {
  return (
    <Item variant={"outline"}>
      <ItemContent>
        <ItemTitle className="flex gap-4">
          <Checkbox
            checked={isCompleted}
            onCheckedChange={() => onToggleCompleted(id)}
            id={`${id}`}
            className="h-5 w-5 data-[state=checked]:border-emerald-200 data-[state=checked]:bg-emerald-300 [&_svg]:stroke-green-900"
          />
          <Label
            htmlFor={`${id}`}
            className={isCompleted ? "text-muted-foreground line-through" : ""}
          >
            {title}
          </Label>
        </ItemTitle>
      </ItemContent>
      <ItemActions>
        <Button onClick={() => onDelete(id)} variant={"destructive"}>
          <Trash2 />
        </Button>
      </ItemActions>
    </Item>
  )
}
export default TodoItem
