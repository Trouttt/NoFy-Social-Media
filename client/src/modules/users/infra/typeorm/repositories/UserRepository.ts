import { getRepository, Repository } from 'typeorm';
import { IUser } from '../../../dtos/IUser';
import IUserRepository from '../../../repositories/IUserRepository';
import User from '../entities/User';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
  public async create(data: IUser): Promise<User> {
    const user = this.ormRepository.create(data);
    await this.ormRepository.save(user);
    return user;
  }
  public async findOne(email: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne({ where: { email: email } });
    return user;
  }
}

export default UserRepository;
