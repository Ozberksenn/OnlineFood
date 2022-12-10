import { Injectable } from '@nestjs/common';
import { prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.users.findMany();
  }
  async createUser(input: any) {
    const sign = await this.prisma.users.create({
      data: {
        name: input.name,
        profilePhoto:
          'https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png',
        last_name: input.last_name,
        password: input.password,
        email: input.email,
      },
    });
    console.log(sign);
  }
  async login(input: { email: string; password: string }) {
    const result = await this.prisma.users.findFirst({
      where: {
        AND: [
          {
            email: input.email,
            password: input.password,
          },
        ],
      },
    });
    console.log(result);
    if (result) {
      return { message: '200', payload: { result } };
    } else {
      return 'Yok';
    }
  }
  async remove(id: number) {
    const remove = this.prisma.users.delete({ where: { id } });
    return remove;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({ where: { id }, data: updateUserDto });
  }
}
