export interface ReputationDataType {
  tag: string;
  title: string;
  reasons: {
    title: string;
    description: string;
    iconUrl: string;
  }[];
}
