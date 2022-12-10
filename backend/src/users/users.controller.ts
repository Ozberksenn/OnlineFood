import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Post('signUp')
  async signUp(
    @Body()
    input: {
      name: string;
      last_name: string;
      password: string;
      email: string;
      profilePhoto: string;
    },
  ) {
    return await this.usersService.createUser(input);
  }
  @Post('login')
  async signIn(@Body() input) {
    return await this.usersService.login(input);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    console.log(id);
    return this.usersService.remove(+id);
  }
  @Patch(':id')
  update(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, UpdateUserDto);
  }
}
