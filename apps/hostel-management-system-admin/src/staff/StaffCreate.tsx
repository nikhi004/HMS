import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HostelTitle } from "../hostel/HostelTitle";

export const StaffCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput
          label="contact_information"
          multiline
          source="contactInformation"
        />
        <ReferenceInput source="hostel.id" reference="Hostel" label="hostel">
          <SelectInput optionText={HostelTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <div />
        <TextInput label="position" source="position" />
        <TextInput label="qualification" source="qualification" />
      </SimpleForm>
    </Create>
  );
};
