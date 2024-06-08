export type MentorList = Mentor[];

export interface Mentor {
  id: number;
  specialties: Specialty[];
  first_name: string;
  last_name: string;
  biography: string;
  image: string;
}

export interface Specialty {
  id: number;
  title: string;
}
