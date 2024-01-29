export interface ServicesDataType {
  tag: string;
  title: string;
  serviceList: {
    label: string;
    iconUrl: string;
    iconUrlDark?: string;
  }[];
}
