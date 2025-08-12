import type { IProduct } from "../../service/apis/product/product.type";
import ImageViewRender from "./components/ImageViewRender";
import ThreeDModelViewerRender from "./components/threed-model-viewer-render";

export const productDetailsConfig: IProductDetailsConfig[] = [
  {
    label: "Product Name",
    sourceKey: "name",
  },
  {
    label: "Description",
    sourceKey: "desc",
  },
  {
    label: "Category",
    sourceKey: "category",
    render: (value: IProduct) => value.category?.name,
  },
  {
    label: "Image",
    sourceKey: "image",
    render: (value: IProduct) => <ImageViewRender value={value.image} />,
  },
  {
    label: "Price",
    sourceKey: "actual_price",
    render: (value: IProduct) => "INR " + value.actual_price?.toFixed(2),
  },
  {
    label: "Offer Price",
    sourceKey: "offer_price",
    render: (value: IProduct) => "INR " + value.offer_price?.toFixed(2),
  },
  {
    label: "Is Recommended",
    sourceKey: "isRecommended.label",
    render: (value: IProduct) => (value.is_recommended === true ? "Yes" : "No"),
  },
  {
    label: "Food Type",
    sourceKey: "food_type",
    render: (value: IProduct) => value.food_type,
  },
  {
    label: "Specialty",
    sourceKey: "speciality",
  },
  { label: "3D Model", sourceKey: "three_glb", render: (value: IProduct) => <ThreeDModelViewerRender value={value.three_glb} /> },
  {
    label: "Recipes",
    sourceKey: "recipes",
    render: (value: IProduct) => value.recipes.join(", "),
  },
  {
    label: "Youtube Embed Link",
    sourceKey: "youtubeEmbedLink",
  },
];

interface IProductDetailsConfig {
  label: string;
  sourceKey: string;
  render?: (value: IProduct) => React.ReactNode;
}
