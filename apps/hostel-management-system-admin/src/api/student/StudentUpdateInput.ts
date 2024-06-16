import { InputJsonValue } from "../../types";
import { HostelWhereUniqueInput } from "../hostel/HostelWhereUniqueInput";

export type StudentUpdateInput = {
  address?: string | null;
  guardianDetails?: InputJsonValue;
  hostel?: HostelWhereUniqueInput | null;
  name?: string | null;
  parentDetails?: InputJsonValue;
  photo?: InputJsonValue;
  registrationNumber?: string | null;
  rollNumber?: string | null;
  status?: "Option1" | null;
};
