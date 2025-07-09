/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ITableColumn } from "../../models/table-column";
import RenderCell from "./renderCell";

export interface ITableProps {
  columns: ITableColumn[];
  data: any[];
}

const Table = ({ columns, data }: ITableProps) => {
  return (
    <div className="bg-white py-3  rounded-xl">
      <table className="w-full overflow-auto">
        <thead className="border-b border-b-borderLightGray ">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className=" py-3 px-6 font-medium whitespace-nowrap text-start">
                {column.columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, i) => {
            return (
              <tr className={`${i % 2 === 1 ? "bg-tableBg" : ""} `}>
                {columns.map((column) => {
                  return (
                    <td
                      key={column.key}
                      className=" py-3 px-6 font-normal">
                      {RenderCell({ column, item })}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
