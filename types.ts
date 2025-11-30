export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Neubau' | 'Sanierung' | 'Soziales';
  description: string;
  year: string;
  location: string;
  images: string[];
}