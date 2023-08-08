import { Injectable } from '@nestjs/common';
import { UserRepository } from '@app/domain/repository/user.repository';
import { User } from '../entities/user.entity';
import { UseCase } from '@app/domain/base/use-case';

@Injectable()
export class FindAllUserService implements UseCase<void, User[]> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    console.log('FindAllUserService.execute()');
    return this.userRepository.findAll();
  }
}
