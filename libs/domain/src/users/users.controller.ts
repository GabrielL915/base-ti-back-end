import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UseCase } from '@app/domain/base/use-case';
import { CreateUserService } from './services/create-user';
import { FindAllUserService } from './services/findAll-user';
import { UpdateUserService } from './services/update-user';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserService,
    private readonly findAllUserUseCase: FindAllUserService,
    private readonly updateUserUseCase: UpdateUserService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Get()
  async findAll() {
    return this.findAllUserUseCase.execute();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUserUseCase.execute({ id, input: updateUserDto });
}
}
