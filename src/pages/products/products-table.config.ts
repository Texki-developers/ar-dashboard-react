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
  {
    key: "actions",
    columnName: "Actions",
    type: "actions",
    actions: ["delete"],
    sourceKey: "",
  },
];

export const dummyData = [
  {
    data: {
      name: "Organic Honey",
      createdAt: "2023-08-15T10:20:30.000Z",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 499,
      offerPrice: 399,
    },
  },
  {
    data: {
      name: "Almond Butter",
      createdAt: "2024-01-10T14:05:00.000Z",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 699,
      offerPrice: 599,
    },
  },
  {
    data: {
      name: "Green Tea",
      createdAt: "2025-05-01T09:30:00.000Z",
      image:
        "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 299,
      offerPrice: 249,
    },
  },
];
