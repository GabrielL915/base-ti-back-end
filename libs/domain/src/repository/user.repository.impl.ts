import { UserRepository } from './user.repository';
//import { User } from '../users/entities/user.entity';
import {
  CreateOne,
  UpdateOne,
  RemoveOne,
  FindAll,
  FindOne,
} from '../base/repository';
import { User } from '../users/interfaces/user';

export class UserRepositoryImpl implements UserRepository {
  createOne(input: User): Promise<User> {
    return Promise.resolve(undefined);
  }
  updateOne(id: string, input: User): Promise<User> {
    return Promise.resolve(undefined);
  }
  removeOne(id: string): Promise<User> {
    return Promise.resolve(undefined);
  }
  findOne(id: string): Promise<User> {
    return Promise.resolve(undefined);
  }
  findAll(): Promise<User[]> {
    return Promise.resolve(undefined);
  }
}
