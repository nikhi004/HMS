import { RoomCreateNestedManyWithoutHostelsInput } from "./RoomCreateNestedManyWithoutHostelsInput";
import { StaffCreateNestedManyWithoutHostelsInput } from "./StaffCreateNestedManyWithoutHostelsInput";
import { StudentCreateNestedManyWithoutHostelsInput } from "./StudentCreateNestedManyWithoutHostelsInput";
import { UserCreateNestedManyWithoutHostelsInput } from "./UserCreateNestedManyWithoutHostelsInput";

export type HostelCreateInput = {
  location?: string | null;
  name?: string | null;
  rooms?: RoomCreateNestedManyWithoutHostelsInput;
  staffItems?: StaffCreateNestedManyWithoutHostelsInput;
  students?: StudentCreateNestedManyWithoutHostelsInput;
  users?: UserCreateNestedManyWithoutHostelsInput;
};
