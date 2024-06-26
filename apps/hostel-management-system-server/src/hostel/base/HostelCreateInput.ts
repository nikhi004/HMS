/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { RoomCreateNestedManyWithoutHostelsInput } from "./RoomCreateNestedManyWithoutHostelsInput";
import { Type } from "class-transformer";
import { StaffCreateNestedManyWithoutHostelsInput } from "./StaffCreateNestedManyWithoutHostelsInput";
import { StudentCreateNestedManyWithoutHostelsInput } from "./StudentCreateNestedManyWithoutHostelsInput";
import { UserCreateNestedManyWithoutHostelsInput } from "./UserCreateNestedManyWithoutHostelsInput";

@InputType()
class HostelCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => RoomCreateNestedManyWithoutHostelsInput,
  })
  @ValidateNested()
  @Type(() => RoomCreateNestedManyWithoutHostelsInput)
  @IsOptional()
  @Field(() => RoomCreateNestedManyWithoutHostelsInput, {
    nullable: true,
  })
  rooms?: RoomCreateNestedManyWithoutHostelsInput;

  @ApiProperty({
    required: false,
    type: () => StaffCreateNestedManyWithoutHostelsInput,
  })
  @ValidateNested()
  @Type(() => StaffCreateNestedManyWithoutHostelsInput)
  @IsOptional()
  @Field(() => StaffCreateNestedManyWithoutHostelsInput, {
    nullable: true,
  })
  staffItems?: StaffCreateNestedManyWithoutHostelsInput;

  @ApiProperty({
    required: false,
    type: () => StudentCreateNestedManyWithoutHostelsInput,
  })
  @ValidateNested()
  @Type(() => StudentCreateNestedManyWithoutHostelsInput)
  @IsOptional()
  @Field(() => StudentCreateNestedManyWithoutHostelsInput, {
    nullable: true,
  })
  students?: StudentCreateNestedManyWithoutHostelsInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutHostelsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutHostelsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutHostelsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutHostelsInput;
}

export { HostelCreateInput as HostelCreateInput };
