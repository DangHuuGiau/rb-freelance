export interface ProjectsDataType {
  tag: string;
  title: string;
  works: {
    name: string;
    imageUrl: string;
    location: string;
    tag: string;
    description: string;
  }[];
}
