import { useQuery } from "@tanstack/react-query";
import { ProductApi } from "../../service/apis/product/Product";

const useProducts = () => {
  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["list-products"],
    queryFn: () => ProductApi.getProducts(),
  });
  return {
    products,
    productsLoading,
  };
};

export default useProducts;
