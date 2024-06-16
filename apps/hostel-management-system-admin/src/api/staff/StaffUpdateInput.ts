import { HostelWhereUniqueInput } from "../hostel/HostelWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type StaffUpdateInput = {
  address?: string | null;
  contactInformation?: string | null;
  hostel?: HostelWhereUniqueInput | null;
  name?: string | null;
  photo?: InputJsonValue;
  position?: string | null;
  qualification?: string | null;
};
