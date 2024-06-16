import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HostelTitle } from "../hostel/HostelTitle";

export const StaffEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
