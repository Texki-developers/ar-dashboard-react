import { useEffect, useState } from "react";
import { ProductApi } from "../../service/apis/product/Product";
import type { IProduct } from "../../service/apis/product/product.type";
import { useQuery } from "@tanstack/react-query";

export const useProductDetails = (id: string) => {
  const [product, setProduct] = useState<IProduct | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(),
  });

  const getProduct = async () => {
    const response = await ProductApi.getProductById(id);
    return response.data;
  };

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  return {
    product,
    isLoading,
    error,
    getProduct,
  };
};
