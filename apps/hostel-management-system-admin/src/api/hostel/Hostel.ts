import { Room } from "../room/Room";
import { Staff } from "../staff/Staff";
import { Student } from "../student/Student";
import { User } from "../user/User";

export type Hostel = {
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  rooms?: Array<Room>;
  staffItems?: Array<Staff>;
  students?: Array<Student>;
  updatedAt: Date;
  users?: Array<User>;
};
