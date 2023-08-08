import { Module } from '@nestjs/common';
//import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CreateUserService } from './services/create-user';
import { FindAllUserService } from './services/findAll-user';
import { UserRepository } from '@app/domain/repository/user.repository';
import { UserRepositoryImpl } from '@app/domain/repository/user.repository.impl';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    CreateUserService,
    FindAllUserService,
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
  ],
})
export class UsersModule {}
