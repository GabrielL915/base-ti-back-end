import {
  CreateOne,
  UpdateOne,
  RemoveOne,
  FindOne,
  FindAll,
} from '../base/repository';
import { User } from '../users/interfaces/user';

export abstract class UserRepository
  implements
    CreateOne<User, User>,
    UpdateOne<User, 'id', User>,
    RemoveOne<User, 'id', User>,
    FindOne<User, 'id', User>,
    FindAll<User>
{
  abstract createOne(input: User): Promise<User>;
  abstract updateOne(id: string, input: User): Promise<User>;
  abstract removeOne(id: string): Promise<User>;
  abstract findOne(id: string): Promise<User>;
  abstract findAll(): Promise<User[]>;
}
