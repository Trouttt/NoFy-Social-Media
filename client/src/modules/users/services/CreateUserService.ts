import { IUser } from '../dtos/IUser';
class CreateUserService {
  public async execute({
    email,
    password,
    name,
    birthday,
    level,
  }: IUser): Promise<IUser> {
    const user = {
      email,
      password,
      name,
      birthday,
      level,
    };
    return user;
  }
}
export default CreateUserService;
