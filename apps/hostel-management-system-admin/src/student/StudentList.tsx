import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HOSTEL_TITLE_FIELD } from "../hostel/HostelTitle";

export const StudentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Students"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="guardian_details" source="guardianDetails" />
        <ReferenceField label="hostel" source="hostel.id" reference="Hostel">
          <TextField source={HOSTEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="parent_details" source="parentDetails" />
        <TextField label="photo" source="photo" />
        <TextField label="registration_number" source="registrationNumber" />
        <TextField label="roll_number" source="rollNumber" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
