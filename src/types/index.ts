export type ProjectType = {
  id: number;
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  logo: string;
  image: string;
  tags: {
    id: number;
    name: string;
    path: string;
  }[];
};
