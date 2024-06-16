import { RoomUpdateManyWithoutHostelsInput } from "./RoomUpdateManyWithoutHostelsInput";
import { StaffUpdateManyWithoutHostelsInput } from "./StaffUpdateManyWithoutHostelsInput";
import { StudentUpdateManyWithoutHostelsInput } from "./StudentUpdateManyWithoutHostelsInput";
import { UserUpdateManyWithoutHostelsInput } from "./UserUpdateManyWithoutHostelsInput";

export type HostelUpdateInput = {
  location?: string | null;
  name?: string | null;
  rooms?: RoomUpdateManyWithoutHostelsInput;
  staffItems?: StaffUpdateManyWithoutHostelsInput;
  students?: StudentUpdateManyWithoutHostelsInput;
  users?: UserUpdateManyWithoutHostelsInput;
};
