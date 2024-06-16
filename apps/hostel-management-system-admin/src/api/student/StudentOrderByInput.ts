import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  guardianDetails?: SortOrder;
  hostelId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentDetails?: SortOrder;
  photo?: SortOrder;
  registrationNumber?: SortOrder;
  rollNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
