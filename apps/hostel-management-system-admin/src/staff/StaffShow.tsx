import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { HOSTEL_TITLE_FIELD } from "../hostel/HostelTitle";

export const StaffShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="contact_information" source="contactInformation" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="hostel" source="hostel.id" reference="Hostel">
          <TextField source={HOSTEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="photo" source="photo" />
        <TextField label="position" source="position" />
        <TextField label="qualification" source="qualification" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
