import { useQuery } from "@tanstack/react-query";
import SettingsApi from "../../../../service/apis/settings/Settings";
import type { IProfileSettings } from "../../../../service/apis/settings/Settings.type";
import { useEffect, useState } from "react";

const useProfileSettings = () => {
  const [data, setData] = useState<IProfileSettings>();
  const { data: profileSettings, isLoading } = useQuery({
    queryKey: ["profile-settings"],
    queryFn: () => SettingsApi.getProfileSettings(),
  });

  useEffect(() => {
    if (profileSettings?.data) {
      setData(profileSettings?.data);
    }
  }, [profileSettings]);

  return { data, isLoading, setData };
};

export default useProfileSettings;
