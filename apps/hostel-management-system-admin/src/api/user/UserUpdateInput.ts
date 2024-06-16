import { HostelWhereUniqueInput } from "../hostel/HostelWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  hostel?: HostelWhereUniqueInput | null;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
};
