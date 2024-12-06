import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(email: string, password: string, firstName: string, lastName: string, birthDate: Date, gender: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.users.create({
      data: { email, password: hashedPassword, firstName, lastName, birthDate, gender },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.users.findUnique({ where: { email } });
  }

  async getAllUsers() {
    return this.prisma.users.findMany();
  }

  async deleteUser(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }
}
