import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HostelWhereUniqueInput } from "../hostel/HostelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hostel?: HostelWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: "Option1";
  username?: StringFilter;
};
