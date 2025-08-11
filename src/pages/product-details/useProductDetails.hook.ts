import { useEffect, useState } from "react";
import { ProductApi } from "../../service/apis/product/Product";
import type { IProduct } from "../../service/apis/product/product.type";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const useProductDetails = (id: string) => {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(),
  });

  const getProduct = async () => {
    const response = await ProductApi.getProductById(id);
    return response.data;
  };

  const deleteProduct = async () => {
    setIsDeleting(true);
    try {
      const response = await ProductApi.deleteProduct(id);
      toast.success("Product deleted successfully");
      navigate("/products");
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("Error deleting product");
    } finally {
      setIsDeleting(false);
    }
  };

  const onProductRemove = () => {
    setShowConfirmPopup(true);
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
    deleteProduct,
    isDeleting,
    showConfirmPopup,
    onProductRemove,
    setShowConfirmPopup,
  };
};
