export interface AboutUsDataType {
  tag: string;
  title: string;
  body: string[];
  mainImageUrl: string;
  subImageUrl: string;
  cta: {
    path: string;
    label: string;
  };
}
