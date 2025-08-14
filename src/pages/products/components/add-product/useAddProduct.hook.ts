/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryApi } from "../../../../service/apis/category/category";
import { ModelApi } from "../../../../service/apis/models/model";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ProductApi } from "../../../../service/apis/product/Product";
import { toast } from "react-toastify";
import type { IAddProductModal } from "./AddProductModal";
import type { IProduct, IProductApiBody } from "../../../../service/apis/product/product.type";
import { queryClient } from "../../../../main";

const useAddProduct = (product?: IProduct) => {
  const [folderId, setFolderId] = useState<string | undefined>(undefined);
  const [prefillData, setPrefillData] = useState<IAddProductModal | undefined>(undefined);

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

  const updateProduct = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: IAddProductModal }) => {
      delete data.folder;
      const body: IProductApiBody = {
        ...data,
        category: data.category.value,
        file: data.file.value,
        recipes: data.recipes.map((recipe) => recipe.value),
        isRecommended: data.isRecommended.value as boolean,
        specialty: data.specialty.value,
        foodType: data.foodType.value,
        youtubeEmbedLink: data.youtubeEmbedLink,
      };
      return ProductApi.updateProduct(id, body);
    },
    onSuccess: () => {
      toast.success("Product updated successfully");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  useEffect(() => {
    if (product) {
      setPrefillData({
        name: product.name,
        desc: product.desc,
        category: {
          label: product.category?.name,
          value: product.category?._id,
        },
        image: product.image,
        actualPrice: product.actual_price,
        offerPrice: product.offer_price,
        isRecommended: {
          label: product.is_recommended ? "Yes" : "No",
          value: product.is_recommended,
        },
        foodType: {
          label: product.food_type,
          value: product.food_type,
        },
        specialty: {
          label: product.speciality,
          value: product.speciality,
        },
        file: {
          label: product?.file_id?.file_name ?? "",
          value: product?.file_id?._id ?? "",
        },
        folder: {
          label: product?.file_id?.folder_id.folder_name ?? "",
          value: product?.file_id?.folder_id._id ?? "",
        },
        recipes: product.recipes.map((recipe) => ({
          label: recipe,
          value: recipe,
        })),
        youtubeEmbedLink: product?.youtube_url,
      });
    }
  }, [product]);

  const onAddProductSubmit = async (data: IAddProductModal, onClose: () => void, reset: () => void) => {
    try {
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
        reset();
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
    prefillData,
    updateProduct,
  };
};

export default useAddProduct;
