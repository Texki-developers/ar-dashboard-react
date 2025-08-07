/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryApi } from "../../../../service/apis/category/category";
import { ModelApi } from "../../../../service/apis/models/model";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ProductApi } from "../../../../service/apis/product/Product";
import { toast } from "react-toastify";
import type { IAddProductModal } from "./AddProductModal";
import type { IProductApiBody } from "../../../../service/apis/product/product.type";
import { queryClient } from "../../../../main";

const useAddProduct = () => {
  const [folderId, setFolderId] = useState<string | undefined>(undefined);

  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => CategoryApi.getCategoryList(),
  });

  const { data: folders, isLoading: foldersLoading } = useQuery({
    queryKey: ["folders"],
    queryFn: () => ModelApi.getFolder(),
  });

  const { data: files, isLoading: filesLoading } = useQuery({
    queryKey: ["files", folderId],
    queryFn: () => ModelApi.getFiles(folderId!),
    enabled: !!folderId,
  });

  const onAddProductSubmit = async (data: IAddProductModal, onClose: () => void) => {
    try {
      console.log({ data });
      const body: IProductApiBody = {
        ...data,
        category: data.category.value,
        file: data.file.value,
        recipes: data.recipes.map((recipe) => recipe.value),
        isRecommended: data.isRecommended.value === "Yes",
        specialty: data.specialty.value,
        foodType: data.foodType.value,
        youtubeEmbedLink: data.youtubeEmbedLink,
      };
      const response = await ProductApi.addProduct(body);
      if (response?.success) {
        toast.success("Product added successfully");
        onClose();
        queryClient.invalidateQueries({ queryKey: ["list-products"] });
      }
    } catch (error: any) {
      toast.error(error?.message ?? "Something went wrong");
    }
  };

  return {
    categories,
    categoriesLoading,
    folders,
    foldersLoading,
    files,
    filesLoading,
    folderId,
    setFolderId,
    onAddProductSubmit,
  };
};

export default useAddProduct;
