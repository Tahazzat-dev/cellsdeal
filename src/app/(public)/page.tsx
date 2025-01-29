import HeroProducts from "@/Components/HomeHero/HeroProducts/HeroProducts";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { products } from "@/data/data";


export default function Home() {
 
  return (
    <div className=" container mx-auto py-16">
       <HeroProducts></HeroProducts>
      <div className="bg-gray-50  flex gap-3 flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
}
