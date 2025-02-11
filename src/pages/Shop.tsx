import { useEffect } from "react";
import Products from "../components/ui/Products"

const Shop = () => {
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <main style={{padding: '50px'}}>
        <Products heading={'All products'}  />
    </main>
  )
}

export default Shop
