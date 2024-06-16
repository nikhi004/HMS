import { Hostel as THostel } from "../api/hostel/Hostel";

export const HOSTEL_TITLE_FIELD = "name";

export const HostelTitle = (record: THostel): string => {
  return record.name?.toString() || String(record.id);
};
