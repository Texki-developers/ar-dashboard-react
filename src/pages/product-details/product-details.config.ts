export const productDetailsConfig = [
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
    sourceKey: "category.name",
  },
  {
    label: "Image",
    sourceKey: "image",
  },
  {
    label: "Price",
    sourceKey: "actualPrice",
  },
  {
    label: "Offer Price",
    sourceKey: "offerPrice",
  },
  {
    label: "Is Recommended",
    sourceKey: "isRecommended.label",
  },
  {
    label: "Food Type",
    sourceKey: "foodType.label",
  },
  {
    label: "Specialty",
    sourceKey: "specialty.label",
  },
  { label: "3D Model", sourceKey: "three_glb" },
  {
    label: "Recipes",
    sourceKey: "recipes",
    render: (recipes: { label: string }[] = []) => recipes.map((r) => r.label).join(", "),
  },
  {
    label: "Youtube Embed Link",
    sourceKey: "youtubeEmbedLink",
  },
];
