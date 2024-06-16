import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { HOSTEL_TITLE_FIELD } from "./HostelTitle";

export const HostelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Room" target="hostelId" label="Rooms">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="hostel"
              source="hostel.id"
              reference="Hostel"
            >
              <TextField source={HOSTEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="room_number" source="roomNumber" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Staff"
          target="hostelId"
          label="StaffItems"
        >
          <Datagrid rowClick="show">
            <TextField label="address" source="address" />
            <TextField
              label="contact_information"
              source="contactInformation"
            />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="hostel"
              source="hostel.id"
              reference="Hostel"
            >
              <TextField source={HOSTEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="photo" source="photo" />
            <TextField label="position" source="position" />
            <TextField label="qualification" source="qualification" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Student"
          target="hostelId"
          label="Students"
        >
          <Datagrid rowClick="show">
            <TextField label="address" source="address" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="guardian_details" source="guardianDetails" />
            <ReferenceField
              label="hostel"
              source="hostel.id"
              reference="Hostel"
            >
              <TextField source={HOSTEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="parent_details" source="parentDetails" />
            <TextField label="photo" source="photo" />
            <TextField
              label="registration_number"
              source="registrationNumber"
            />
            <TextField label="roll_number" source="rollNumber" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="hostelId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <ReferenceField
              label="hostel"
              source="hostel.id"
              reference="Hostel"
            >
              <TextField source={HOSTEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="role" source="role" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
