import { Injectable } from '@nestjs/common';
import { UserRepository } from '@app/domain/repository/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UseCase } from '@app/domain/base/use-case';

@Injectable()
export class CreateUserService implements UseCase<CreateUserDto, User> {
    constructor(private readonly userRepository: UserRepository) {}
    
    async execute(input: CreateUserDto) : Promise<User>  {
        console.log('CreateUserService.execute()');
        return this.userRepository.createOne(input);
    }
}
