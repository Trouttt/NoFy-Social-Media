import { IUser } from '../dtos/IUser';
import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
  create(data: IUser): Promise<User>;
  //findOne(data: string): Promise<User | undefined>;
  //list(): Promise<IUser[] | undefined>;
  //get(): Promise<IUser | undefined>;
  //update(data: IUser): Promise<User>;
}
