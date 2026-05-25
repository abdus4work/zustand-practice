import { useCartStore } from '@/store/cartStore.ts'
import { beforeEach, describe, it } from 'vitest'

describe('Cart Store',()=>{
  beforeEach(()=>{
    useCartStore.setState({
      cart:[{
        product:{
      id:1,
      name:'keyboard',
      image:'kyb',
      price:399
    },quantity:2
      }]
    })
  })

  it('should add product to cart',()=>{
    useCartStore.getState().addToCart({
      id:1,
      name:'keyboard',
      image:'kyb',
      price:399
    })
    useCartStore.getState().addToCart({
      id:2,
      name:'mouse',
      image:'mus',
      price:199
    })
    console.log(useCartStore.getState().cart)
  })

  it('should remove product from cart',()=>{
    useCartStore.getState().removeFromCart(2)
    console.log(useCartStore.getState().cart)
  })

  it('should clear cart',()=>{
    useCartStore.getState().clearCart()
    console.log(useCartStore.getState().cart)

  })
  it('should decrease quantity',()=>{
    useCartStore.getState().decreaseQuantity(1)
    console.log(useCartStore.getState().cart)
    
  })
})