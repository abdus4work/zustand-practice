import type { CartItemType, ProductType } from "@/components/shoppingCart/type.ts"
import { create } from "zustand"

type CartState = {
  cart: CartItemType[]
  addToCart: (product: ProductType) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  decreaseQuantity: (id: number) => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((p) => p.product.id === product.id)
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      } else return { cart: [...state.cart, { product, quantity: 1 }] }
    }),
  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((prod) => prod.product.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}))
