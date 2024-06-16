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

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <div />
        <ReferenceInput source="hostel.id" reference="Hostel" label="hostel">
          <SelectInput optionText={HostelTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <div />
        <div />
        <TextInput label="registration_number" source="registrationNumber" />
        <TextInput label="roll_number" source="rollNumber" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
