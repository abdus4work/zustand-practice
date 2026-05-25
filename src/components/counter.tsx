import { Button } from "@/components/ui/button.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import { useCountStore } from "@/store/store.ts"

const Counter = () => {
  const count = useCountStore((state) => state.count)
  const step = useCountStore((state) => state.step)
  const setStep = useCountStore((state) => state.setStep)
  const increase = useCountStore((state) => state.increase)
  const decrease = useCountStore((state) => state.decrease)
  const clearCounter = useCountStore((state)=>state.clear)

  return (
    <Card className='lg:w-lg'>
      <CardHeader>
        <CardTitle>Counter</CardTitle>
        <CardDescription>This counter count positive and negative both</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="rounded-md border px-2 py-1">{count}</div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="step">Increment or Decrement by </Label>
          <Input
            id="step"
            placeholder="Step..."
            value={step}
            onChange={(e) => {
              const val = parseInt(e.target.value)
              if (!isNaN(val)) setStep(val)
            }}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className='flex gap-2'>
          <Button onClick={increase}>Increment</Button>
        <Button onClick={decrease} variant={"destructive"}>
          Decrement
        </Button>
        </div>
        <Button onClick={clearCounter}>Clear</Button>
      </CardFooter>
    </Card>
  )
}

export default Counter
