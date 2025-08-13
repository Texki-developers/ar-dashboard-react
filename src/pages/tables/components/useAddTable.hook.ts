import { useMutation } from "@tanstack/react-query";
import { TableApi } from "../../../service/apis/table/Table";

const useAddTable = () => {
  const addTableMutation = useMutation({
    mutationFn: ({ tableNumber }: { tableNumber: string }) => {
      return TableApi.addTable({ tableNumber });
    },
  });
  return {
    addTableMutation,
  };
};

export default useAddTable;
