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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomListRelationFilter } from "../../room/base/RoomListRelationFilter";
import { StaffListRelationFilter } from "../../staff/base/StaffListRelationFilter";
import { StudentListRelationFilter } from "../../student/base/StudentListRelationFilter";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";

@InputType()
class HostelWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  location?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RoomListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RoomListRelationFilter)
  @IsOptional()
  @Field(() => RoomListRelationFilter, {
    nullable: true,
  })
  rooms?: RoomListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StaffListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StaffListRelationFilter)
  @IsOptional()
  @Field(() => StaffListRelationFilter, {
    nullable: true,
  })
  staffItems?: StaffListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StudentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StudentListRelationFilter)
  @IsOptional()
  @Field(() => StudentListRelationFilter, {
    nullable: true,
  })
  students?: StudentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  users?: UserListRelationFilter;
}

export { HostelWhereInput as HostelWhereInput };
