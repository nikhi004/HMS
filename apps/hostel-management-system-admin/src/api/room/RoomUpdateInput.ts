import { HostelWhereUniqueInput } from "../hostel/HostelWhereUniqueInput";

export type RoomUpdateInput = {
  hostel?: HostelWhereUniqueInput | null;
  roomNumber?: string | null;
  status?: "Option1" | null;
};
