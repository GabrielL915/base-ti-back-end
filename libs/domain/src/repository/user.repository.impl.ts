import { UserRepository } from './user.repository';
import { User } from '../users/entities/user.entity';
import {
  CreateOne,
  UpdateOne,
  RemoveOne,
  FindAll,
  FindOne,
} from '../base/repository';
//import { User } from '../users/interfaces/user';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';

export class UserRepositoryImpl implements UserRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async createOne(input: User): Promise<User> {
    const [user] = await this.knex
      .table('entregador')
      .insert({
       // id: input.id,
        nome: input.nome,
        cpf: input.cpf,
        telefone: input.telefone,
      })
      .returning('*');
    return user;
  }
  async updateOne(id: string, input): Promise<User> {
   const [user] = await this.knex.table('users').where({ id }).update({
      name: input.name,
      email: input.email,
      password: input.password,
   }).returning('*');
    return user;
  }
  removeOne(id: string): Promise<User> {
    return Promise.resolve(undefined);
  }
  findOne(id: string): Promise<User> {
    return Promise.resolve(undefined);
  }
  findAll(): Promise<User[]> {
    const users = this.knex.table('entregador');
    return users;
  }
}
