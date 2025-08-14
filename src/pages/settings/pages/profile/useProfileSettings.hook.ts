import { useQuery } from "@tanstack/react-query";
import SettingsApi from "../../../../service/apis/settings/Settings";

const useProfileSettings = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["profile-settings"],
    queryFn: () => SettingsApi.getProfileSettings(),
  });
  return { data, isLoading };
};

export default useProfileSettings;
