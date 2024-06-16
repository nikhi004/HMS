import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  hostelId?: SortOrder;
  id?: SortOrder;
  roomNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
