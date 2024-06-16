import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";
import { StaffListRelationFilter } from "../staff/StaffListRelationFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HostelWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  rooms?: RoomListRelationFilter;
  staffItems?: StaffListRelationFilter;
  students?: StudentListRelationFilter;
  users?: UserListRelationFilter;
};
