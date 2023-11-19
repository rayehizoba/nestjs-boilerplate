import { Injectable } from '@nestjs/common';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';
import { UserUpdateInput } from 'src/@generated/user/user-update.input';
import { UserWhereUniqueInput } from 'src/@generated/user/user-where-unique.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserRoleInput } from './dto/update-user-role.input';
import { UpdateUserStatusInput } from './dto/update-user-status.input';
import { User } from '../../@generated/user/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async get(args: FindManyUserArgs, select: any): Promise<User[]> {
    return this.prisma.user.findMany({ ...args, ...select });
  }

  async update(data: UserUpdateInput, where: UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.update({ data, where });
  }

  async delete(where: UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }

  async updateRole(data: UpdateUserRoleInput, where: UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.update({ data, where });
  }

  async updateStatus(data: UpdateUserStatusInput, where: UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.update({ data, where });
  }
}
