import ImageViewRender from "../../../product-details/components/ImageViewRender";

export const profileSettingsConfig: IProfileSettingsConfig[] = [
  {
    label: "Vendor Name",
    sourceKey: "name",
  },
  {
    label: "Location",
    sourceKey: "location",
  },
  {
    label: "Logo",
    sourceKey: "logo",
    render: (value: string) => <ImageViewRender value={value} />,
  },
  {
    label: "Banner Image",
    sourceKey: "banner",
    render: (value: string) => <ImageViewRender value={value} />,
  },
];

interface IProfileSettingsConfig {
  label: string;
  sourceKey: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any) => React.ReactNode;
}
