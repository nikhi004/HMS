/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Room as PrismaRoom,
  Hostel as PrismaHostel,
} from "@prisma/client";

export class RoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RoomCountArgs, "select">): Promise<number> {
    return this.prisma.room.count(args);
  }

  async rooms<T extends Prisma.RoomFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomFindManyArgs>
  ): Promise<PrismaRoom[]> {
    return this.prisma.room.findMany<Prisma.RoomFindManyArgs>(args);
  }
  async room<T extends Prisma.RoomFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomFindUniqueArgs>
  ): Promise<PrismaRoom | null> {
    return this.prisma.room.findUnique(args);
  }
  async createRoom<T extends Prisma.RoomCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomCreateArgs>
  ): Promise<PrismaRoom> {
    return this.prisma.room.create<T>(args);
  }
  async updateRoom<T extends Prisma.RoomUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomUpdateArgs>
  ): Promise<PrismaRoom> {
    return this.prisma.room.update<T>(args);
  }
  async deleteRoom<T extends Prisma.RoomDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomDeleteArgs>
  ): Promise<PrismaRoom> {
    return this.prisma.room.delete(args);
  }

  async getHostel(parentId: string): Promise<PrismaHostel | null> {
    return this.prisma.room
      .findUnique({
        where: { id: parentId },
      })
      .hostel();
  }
}
