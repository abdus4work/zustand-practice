"use client"
import { useCartStore } from "@/features/shopping-cart/cart-store";
import { Button } from "@/components/ui/button";
import { CartItemType } from "@/features/shopping-cart/type";

type CartItemProps = {
  item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
  const totalPrice = item.product.price * item.quantity;
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <div className="flex h-30 w-full gap-3 rounded-md bg-slate-100 dark:text-black">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="h-full w-20 rounded-md bg-slate-400"
      />
      <div className="flex flex-1 flex-col justify-between py-1 pr-1">
        <h2 className="text-lg font-medium">{item.product.name}</h2>
        <span className="text-lg">Price: {totalPrice}</span>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => decreaseQuantity(item.product.id)}
              className="text-2xl"
              variant={"destructive"}
            >
              -
            </Button>
            <span className="inline-block w-5 text-center text-lg">
              {item.quantity}
            </span>
            <Button
              onClick={() => addToCart(item.product)}
              className="bg-emerald-300 text-2xl text-emerald-700"
            >
              +
            </Button>
          </div>
          <Button
            onClick={() => removeFromCart(item.product.id)}
            variant={"destructive"}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
