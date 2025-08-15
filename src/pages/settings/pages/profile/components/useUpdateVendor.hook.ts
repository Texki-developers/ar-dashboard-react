import { useMutation } from "@tanstack/react-query";
import SettingsApi from "../../../../../service/apis/settings/Settings";
import type { IUpdateVendor } from "./UpdateVendor";
import type { IProfileSettings } from "../../../../../service/apis/settings/Settings.type";

const useUpdateVendor = (id: string, setData: (data: IProfileSettings) => void) => {
  const updateVendor = useMutation({
    mutationFn: async (data: IUpdateVendor) => {
      return SettingsApi.updateVendor(data, id);
    },
    onSuccess: (data) => {
      setData(data?.data);
    },
  });
  return { updateVendor };
};

export default useUpdateVendor;
