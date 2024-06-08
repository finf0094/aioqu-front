export type CourseList = Course[];

export interface Course {
  id: number;
  title: string;
  price: number;
  course_type: string;
  description: string;
  is_favorite: boolean;
  image?: string;
}
