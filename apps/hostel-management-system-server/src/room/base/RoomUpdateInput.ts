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
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumRoomStatus } from "./EnumRoomStatus";

@InputType()
class RoomUpdateInput {
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
  roomNumber?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumRoomStatus,
  })
  @IsEnum(EnumRoomStatus)
  @IsOptional()
  @Field(() => EnumRoomStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { RoomUpdateInput as RoomUpdateInput };
