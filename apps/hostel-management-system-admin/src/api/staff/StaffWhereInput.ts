import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HostelWhereUniqueInput } from "../hostel/HostelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type StaffWhereInput = {
  address?: StringNullableFilter;
  contactInformation?: StringNullableFilter;
  hostel?: HostelWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  photo?: JsonFilter;
  position?: StringNullableFilter;
  qualification?: StringNullableFilter;
};
