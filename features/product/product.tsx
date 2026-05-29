import ProductItem from "@/features/product/product-item";
import { PRODUCTS } from "@/features/shopping-cart/product";
import Cart from "@/features/shopping-cart/cart";

const Product = () => {
  const product = PRODUCTS;
  return (
    <div className="w-full space-y-5 ">
      <div className="flex z-10 justify-between items-center mt-4 sticky top-21 py-4 bg-accent rounded-md px-3">
        <h1 className="text-5xl">Products</h1>
        <div className="relative flex justify-center items-center">
          <Cart />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {product.map((prod) => (
          <ProductItem key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};
export default Product;
