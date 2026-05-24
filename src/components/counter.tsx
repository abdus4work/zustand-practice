import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'
import { useCountStore } from '@/store/store.ts'

const Counter = () => {
  const useCount = useCountStore();
  return (
     <div className="flex flex-col gap-4">
        <h1>Counter</h1>
        <div className="rounded-md border px-2 py-1">{useCount.count}</div>
        <Label>Increment or Decrement by </Label>
        <Input
          placeholder="Step..."
          value={useCount.step}
          onChange={(e) => useCount.setStep(parseInt(e.target.value))}
        />
        <div className="space-x-1">
          <Button onClick={useCount.increase}>Increment</Button>
          <Button onClick={useCount.decrease} variant={"destructive"}>
            Decrement
          </Button>
        </div>
      </div>
  )
}

export default Counter