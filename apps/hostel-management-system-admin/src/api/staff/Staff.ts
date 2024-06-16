import { Hostel } from "../hostel/Hostel";
import { JsonValue } from "type-fest";

export type Staff = {
  address: string | null;
  contactInformation: string | null;
  createdAt: Date;
  hostel?: Hostel | null;
  id: string;
  name: string | null;
  photo: JsonValue;
  position: string | null;
  qualification: string | null;
  updatedAt: Date;
};
