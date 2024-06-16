/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { StudentService } from "../student.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { StudentCreateInput } from "./StudentCreateInput";
import { Student } from "./Student";
import { StudentFindManyArgs } from "./StudentFindManyArgs";
import { StudentWhereUniqueInput } from "./StudentWhereUniqueInput";
import { StudentUpdateInput } from "./StudentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class StudentControllerBase {
  constructor(
    protected readonly service: StudentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Student })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createStudent(
    @common.Body() data: StudentCreateInput
  ): Promise<Student> {
    return await this.service.createStudent({
      data: {
        ...data,

        hostel: data.hostel
          ? {
              connect: data.hostel,
            }
          : undefined,
      },
      select: {
        address: true,
        createdAt: true,
        guardianDetails: true,

        hostel: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        parentDetails: true,
        photo: true,
        registrationNumber: true,
        rollNumber: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Student] })
  @ApiNestedQuery(StudentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async students(@common.Req() request: Request): Promise<Student[]> {
    const args = plainToClass(StudentFindManyArgs, request.query);
    return this.service.students({
      ...args,
      select: {
        address: true,
        createdAt: true,
        guardianDetails: true,

        hostel: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        parentDetails: true,
        photo: true,
        registrationNumber: true,
        rollNumber: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async student(
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Student | null> {
    const result = await this.service.student({
      where: params,
      select: {
        address: true,
        createdAt: true,
        guardianDetails: true,

        hostel: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        parentDetails: true,
        photo: true,
        registrationNumber: true,
        rollNumber: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateStudent(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() data: StudentUpdateInput
  ): Promise<Student | null> {
    try {
      return await this.service.updateStudent({
        where: params,
        data: {
          ...data,

          hostel: data.hostel
            ? {
                connect: data.hostel,
              }
            : undefined,
        },
        select: {
          address: true,
          createdAt: true,
          guardianDetails: true,

          hostel: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          parentDetails: true,
          photo: true,
          registrationNumber: true,
          rollNumber: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteStudent(
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Student | null> {
    try {
      return await this.service.deleteStudent({
        where: params,
        select: {
          address: true,
          createdAt: true,
          guardianDetails: true,

          hostel: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          parentDetails: true,
          photo: true,
          registrationNumber: true,
          rollNumber: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
