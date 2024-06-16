import { HostelWhereInput } from "./HostelWhereInput";
import { HostelOrderByInput } from "./HostelOrderByInput";

export type HostelFindManyArgs = {
  where?: HostelWhereInput;
  orderBy?: Array<HostelOrderByInput>;
  skip?: number;
  take?: number;
};
