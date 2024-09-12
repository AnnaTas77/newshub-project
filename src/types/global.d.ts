export interface ArticleData {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface FormData {
  category: string;
  title: string;
  author: string;
  content: string;
  image: string;
}
