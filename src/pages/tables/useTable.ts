import { useQuery } from "@tanstack/react-query";
import { TableApi } from "../../service/apis/table/Table";

const useTables = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tables"],
    queryFn: () => TableApi.getAllTables(),
  });

  return {
    tables: data?.data,
    isLoading,
  };
};

export default useTables;
