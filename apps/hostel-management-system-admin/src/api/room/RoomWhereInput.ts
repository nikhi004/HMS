import { HostelWhereUniqueInput } from "../hostel/HostelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  hostel?: HostelWhereUniqueInput;
  id?: StringFilter;
  roomNumber?: StringNullableFilter;
  status?: "Option1";
};
