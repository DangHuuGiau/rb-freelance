export interface TestimonialsDataType {
  tag: string;
  reviews: {
    id: number;
    name: string;
    role: string;
    comment: string;
  }[];
}
