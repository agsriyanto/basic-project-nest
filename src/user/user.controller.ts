import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string; firstName: string, lastName: string, birthDate: Date, gender: string }) {
    return this.userService.createUser(body.email, body.password, body.firstName, body.lastName, body.birthDate, body.gender);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
