import { JsonValue } from "type-fest";
import { Hostel } from "../hostel/Hostel";

export type Student = {
  address: string | null;
  createdAt: Date;
  guardianDetails: JsonValue;
  hostel?: Hostel | null;
  id: string;
  name: string | null;
  parentDetails: JsonValue;
  photo: JsonValue;
  registrationNumber: string | null;
  rollNumber: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
