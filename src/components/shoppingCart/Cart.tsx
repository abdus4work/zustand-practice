import CartItem from "@/components/shoppingCart/CartItem.tsx"
import { Button } from "@/components/ui/button.tsx"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet.tsx"
import { useCartStore } from "@/store/cartStore.ts"
import { ShoppingCart } from "lucide-react"

const Cart = () => {
  const totalItem = useCartStore((state) =>
    state.cart.reduce((acc, item) => acc + item.quantity, 0)
  )
  const cart = useCartStore((state) => state.cart)
  const clearCart = useCartStore((state) => state.clearCart)
  const totalPrice = useCartStore((state) =>
    state.cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    )
  )
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className="cursor-pointer active:scale-95">
            <ShoppingCart className="text-emerald-500" size={40} />
            <span className="absolute -top-2 -right-2 inline-block min-w-7 rounded-full bg-emerald-300 p-1 text-center text-sm font-bold">
              {totalItem}
            </span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-lg px-2">
          <SheetHeader>
            <SheetTitle className="text-2xl">Your Cart</SheetTitle>
          </SheetHeader>
          {cart.length === 0 ? (
            <span className="text-center text-lg text-muted-foreground">
              No Item
            </span>
          ) : (
            <div className='flex flex-col gap-3 overflow-y-auto scrollbar-none'>
              {cart.map((item) => <CartItem key={item.product.id} item={item} />)}
            </div>
          )}
          <SheetFooter className="space-y-3">
            <span className="text-2xl font-bold">
              Sub Total: &#8377; {totalPrice}
            </span>
            <div className="flex w-full gap-2">
              <Button
                variant={"destructive"}
                className="flex-1"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Button
                disabled={totalItem === 0}
                className="flex-1 bg-emerald-500 text-lg"
              >
                Pay &#8377; {totalPrice}
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
export default Cart
