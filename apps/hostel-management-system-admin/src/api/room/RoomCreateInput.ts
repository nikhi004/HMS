import { HostelWhereUniqueInput } from "../hostel/HostelWhereUniqueInput";

export type RoomCreateInput = {
  hostel?: HostelWhereUniqueInput | null;
  roomNumber?: string | null;
  status?: "Option1" | null;
};
