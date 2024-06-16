import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { HostelWhereUniqueInput } from "../hostel/HostelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  guardianDetails?: JsonFilter;
  hostel?: HostelWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  parentDetails?: JsonFilter;
  photo?: JsonFilter;
  registrationNumber?: StringNullableFilter;
  rollNumber?: StringNullableFilter;
  status?: "Option1";
};
