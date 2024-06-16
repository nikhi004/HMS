import { Hostel } from "../hostel/Hostel";

export type Room = {
  createdAt: Date;
  hostel?: Hostel | null;
  id: string;
  roomNumber: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
