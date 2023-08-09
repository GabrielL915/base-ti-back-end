import { Injectable } from '@nestjs/common';
import { UserRepository } from '@app/domain/repository/user.repository';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UseCase } from '@app/domain/base/use-case';

@Injectable()
export class UpdateUserService implements UseCase<{ id: string, input: UpdateUserDto }, User> {
    constructor(private readonly userRepository: UserRepository) {}
    
    async execute({ id, input }: { id: string, input: UpdateUserDto }): Promise<User> {
        console.log('UpdateUserService.execute()');
        return this.userRepository.updateOne(id, input);
    }
}
