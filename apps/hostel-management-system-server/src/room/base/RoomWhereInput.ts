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
import { HostelWhereUniqueInput } from "../../hostel/base/HostelWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumRoomStatus } from "./EnumRoomStatus";

@InputType()
class RoomWhereInput {
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
  hostel?: HostelWhereUniqueInput;

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
  roomNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumRoomStatus,
  })
  @IsEnum(EnumRoomStatus)
  @IsOptional()
  @Field(() => EnumRoomStatus, {
    nullable: true,
  })
  status?: "Option1";
}

export { RoomWhereInput as RoomWhereInput };
