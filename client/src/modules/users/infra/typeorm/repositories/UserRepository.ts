import { getRepository, Repository } from 'typeorm';
import { IUser } from '../../../dtos/IUser';
import IUserRepository from '../../../repositories/IUserRepository';
import User from '../entities/User';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
  save(data: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<IUser[] | undefined> {
    throw new Error('Method not implemented.');
  }
  get(): Promise<IUser | undefined> {
    throw new Error('Method not implemented.');
  }
  update(data: IUser): Promise<User> {
    throw new Error('Method not implemented.');
  }
  public async create(data: IUser): Promise<User> {
    const user = this.ormRepository.create(data);
    await this.ormRepository.save(user);
    return user;
  }
}

export default UserRepository;
