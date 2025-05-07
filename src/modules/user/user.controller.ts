import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  async findAll() {}

  @Get(':id')
  @ApiResponse({ status: 201, description: 'Usuário encontrado com sucesso' })
  async findById(@Param('id') id: number) {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async update() {}

  async remove() {}
}
