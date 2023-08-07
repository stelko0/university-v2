export interface Lecturer {
  id: number;
  name: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

export type GetLecturersResponse = Lecturer[];
export type GetLecturerByIdResponse = Lecturer;
