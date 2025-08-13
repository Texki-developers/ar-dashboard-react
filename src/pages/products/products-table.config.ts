import type { ITableColumn } from "../../models/table-column";

export const productTableColumn: ITableColumn[] = [
  {
    key: "name",
    columnName: "Name",
    type: "text",
    sourceKey: "name",
  },
  {
    key: "createdAt",
    columnName: "Created At",
    type: "date",
    dateFormat: "DD-MM-YYYY",
    sourceKey: "createdAt",
  },
  {
    key: "image",
    columnName: "Image",
    type: "image",
    baseUrl: import.meta.env.VITE_FILE_URL,
    sourceKey: "image",
  },
  {
    key: "category",
    columnName: "Category",
    type: "text",
    sourceKey: "category.name",
  },
  {
    key: "foodType",
    columnName: "Food Type",
    type: "text",
    sourceKey: "food_type",
  },
  {
    key: "speciality",
    columnName: "Speciality",
    type: "text",
    sourceKey: "speciality",
  },
  {
    key: "actualPrice",
    columnName: "Price",
    type: "price",
    currency: "INR",
    sourceKey: "actual_price",
  },
  {
    key: "offerPrice",
    columnName: "Offer Price",
    type: "price",
    currency: "INR",
    sourceKey: "offer_price",
  },
];
