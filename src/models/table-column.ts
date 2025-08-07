export interface ITableColumn {
  key: string;
  columnName: string;
  type: IValueType;
  sourceKey: string;
  dateFormat?: string;
  currency?: Currency;
  actions?: Action[];
  baseUrl?: string;
}

export type IValueType = "text" | "date" | "image" | "price" | "actions";
export type Currency = "INR" | "USD" | "EUR";
export type Action = "delete" | "edit";
