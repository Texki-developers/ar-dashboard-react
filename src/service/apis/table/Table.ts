import type { ApiResponse } from "../../../models/api.type";
import Http from "../../http";
import type { ITable } from "./Table.type";

export class TableApi extends Http {
  static addTable = async ({ tableNumber }: { tableNumber: string }) => {
    const response = await Http.post<{ tableNumber: string }, ApiResponse<ITable[]>>(`/table/create`, { tableNumber });
    return response.data;
  };
  static getAllTables = async () => {
    const response = await Http.get<ApiResponse<ITable[]>>(`/table/all`);
    return response.data;
  };
}
