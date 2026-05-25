export type ProductType = {
  id:number
  name: string
  price: number
  image: string 
}

export type CartItemType = {
  product: ProductType
  quantity: number
}