import { Injectable } from '@nestjs/common';
export type User = any;
@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, name: 'Ripesh', password: 'Ripesh123' },
    { id: 2, name: 'Jeeban', password: 'Sanju' },
  ];

  async findOne(name: string): Promise<User | undefined> {
    return this.users.find((user) => user.name === name);
  }
}
