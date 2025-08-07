/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ITableColumn } from "../../models/table-column";
import moment from "moment";

interface IRenderCellProps {
    column: ITableColumn;
    item: any;
}
const RenderCell = ({ column, item }: IRenderCellProps) => {
    const getData = (key: string, item: any) => {
        const value = key.split(".").reduce((acc: any, curr: string) => acc?.[curr], item);
        return value;
    };
    const value = getData(column.sourceKey, item);
    switch (column.type) {
        case "text":
            return value;
        case "date":
            return <div className="whitespace-nowrap">{value ? moment(value).format(column.dateFormat || "dd-mm-yyy") : ""}</div>;
        case "image":
            return (
                <img
                    className="object-cover w-[80px] h-[50px] rounded-md"
                    src={column.baseUrl + value}
                    alt={"No Image"}
                />
            );
        case "price":
            return <div className="whitespace-nowrap">{column.currency + " " + Number(value).toFixed(2)}</div>;
        default:
            return value;
    }
};

export default RenderCell;
