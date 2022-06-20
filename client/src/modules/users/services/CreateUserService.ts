import { inject, injectable } from 'tsyringe';
import { IUser } from '../dtos/IUser';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository,
  ) {}
  public async execute({
    email,
    password,
    name,
    birthday,
    level,
  }: IUser): Promise<IUser> {
    const user = await this.userRepository.create({
      email,
      password,
      name,
      birthday,
      level,
    });
    return user;
  }
}
export default CreateUserService;
