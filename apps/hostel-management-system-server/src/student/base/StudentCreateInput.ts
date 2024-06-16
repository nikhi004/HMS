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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { HostelWhereUniqueInput } from "../../hostel/base/HostelWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumStudentStatus } from "./EnumStudentStatus";

@InputType()
class StudentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  guardianDetails?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => HostelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HostelWhereUniqueInput)
  @IsOptional()
  @Field(() => HostelWhereUniqueInput, {
    nullable: true,
  })
  hostel?: HostelWhereUniqueInput | null;

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
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  parentDetails?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  photo?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  registrationNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  rollNumber?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumStudentStatus,
  })
  @IsEnum(EnumStudentStatus)
  @IsOptional()
  @Field(() => EnumStudentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { StudentCreateInput as StudentCreateInput };
