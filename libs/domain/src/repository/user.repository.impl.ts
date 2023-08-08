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
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';


export class UserRepositoryImpl implements UserRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async createOne(input: User)/* : Promise<User> */ {
    const user = await this.knex.table('users').insert({
      id: input.id,
      name: input.name,
      email: input.email,
      password: input.password,
    });
    return user
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
    const users = this.knex.table('users')
    return users
  }
}
