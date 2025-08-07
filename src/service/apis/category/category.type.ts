export interface ICategoryList {
  success: boolean;
  data: { name: string; priority: number; vendorId: string; _id: string; createdAt: string; updatedAt: string; __v: number }[];
  message: string;
}
