/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "../../components/box/Box";
import type { ITableColumn } from "../../models/table-column";
import RenderCell from "./renderCell";

export interface ITableProps {
    columns: ITableColumn[];
    data: any[];
    onRowClick?: (item: any) => void;
}

const Table = ({ columns, data, onRowClick }: ITableProps) => {
    return (
        <Box className="overflow-auto w-[calc(100vw-260px)]">
            <table className="w-full">
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
                            <tr onClick={() => onRowClick?.(item)} className={`${i % 2 === 1 ? "bg-tableBg" : ""}  hover:bg-gray-100 ${onRowClick ? "cursor-pointer" : ""}`}>
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
        </Box>
    );
};

export default Table;
