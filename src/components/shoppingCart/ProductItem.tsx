import type { ProductType } from "@/components/shoppingCart/type.ts"
import { Button } from "@/components/ui/button.tsx"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { useCartStore } from '@/store/cartStore.ts'

type ProductItemProps = {
  product: ProductType
}

const ProductItem = ({ product }: ProductItemProps) => {
  const addToCart = useCartStore((state)=>state.addToCart)
  const decreaseQuantity = useCartStore((state)=>state.decreaseQuantity)
  const cartItem = useCartStore((state)=>state.cart.find(prod=>prod.product.id===product.id))
  return (
    <Card className="md:max-w-sm">
      <img className='h-80' src={product.image} />
      <CardHeader>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        {/* <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, error!</CardDescription> */}
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex items-center gap-2">
          {/* <span className="text-lg text-muted-foreground line-through">
            499
          </span> */}
          <span className="text-xl font-bold">&#8377; {product.price}</span>
        </div>
        {cartItem?(
          <div className='flex items-center gap-3 text-xl font-medium'>
            <Button onClick={()=>decreaseQuantity(product.id)} className='px-4 text-2xl' variant={'destructive'}>-</Button>
            <span className='w-5 inline-block text-center'>{cartItem.quantity}</span>
            <Button onClick={()=>addToCart(product)} className='px-4 text-2xl bg-emerald-300 text-emerald-700'>+</Button>
          </div>
        ):(<Button onClick={()=>addToCart(product)} className="bg-emerald-500">Add to Cart</Button>)}
        
      </CardContent>
    </Card>
  )
}
export default ProductItem
